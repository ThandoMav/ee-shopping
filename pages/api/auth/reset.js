import { getSession } from 'next-auth/react';
import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` });
  }

  const { user } = session;
  const {  password } = req.body;
  const { resetToken } = req.params.resetToken;

  if (password && password.trim().length < 5) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();
  const toUpdateUser = await User.findById(resetToken);

  if (password) {
    toUpdateUser.password = bcryptjs.hashSync(password);
  }

  await toUpdateUser.save();
  await db.disconnect();
  res.send({
    message: 'User updated',
  });
}

export default handler;
