import { getSession } from 'next-auth/react';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';
import {  mailgun, payOrderEmailTemplate } from '../../../../utils/email';


const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('Error: signin required');
  }

  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    if (order.isPaid) {
      return res.status(400).send({ message: 'Error: order is already paid' });
    }
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      email_address: req.body.email_address,
    };
    const paidOrder = await order.save();
    await db.disconnect();
    mailgun()
        .messages()
        .send(
          {
            from: 'Studentgroove <mkholowthandow@gmail.com>',
            to: `${order.user.name} <${order.user.email}>`,
            subject: `New order ${order._id}`,
            html: payOrderEmailTemplate(order),
          },
          (error, body) => {
            if (error) {
              console.log(error);
            } else {
              console.log(body);
            }
          }
        );
    res.send({ message: 'order paid successfully', order: paidOrder });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Error: order not found' });
  }
};

export default handler;
