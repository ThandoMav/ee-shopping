import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';

import jwt from 'jsonwebtoken';
import { mailgun, baseUrl } from '../../../utils/index';
import mg from 'mailgun-js';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { email } = req.body;
  if (
    !email ||
    !email.includes('@')
    ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: '3h',
    });
    existingUser.resetToken = token;
    await existingUser.save();

    //reset link
    console.log(`${baseUrl()}/reset-password/${existingUser._id}`);

    mailgun()
      .messages()
      .send(
        {
          from: 'Amazona <me@mg.yourdomain.com>',
          to: `${existingUser.name} <${existingUser.email}>`,
          subject: `Reset Password`,
          html: `
           <p>Please Click the following link to reset your password:</p>
           <a href="${baseUrl()}/reset-password/${existingUser._id}"}>Reset Password</a>
           `,
        },
        (error, body) => {
          console.log(error);
          console.log(body);
        }
      );
      res.status(422).json({ message: 'We sent reset password link to your email.!' });
    await db.disconnect();
    return;
  }else{
    res.status(422).json({ message: 'User does not exist. Create Account!' });
  }
 await db.disconnect();
}

export default handler;
