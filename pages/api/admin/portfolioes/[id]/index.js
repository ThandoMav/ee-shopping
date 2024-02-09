import { getSession } from 'next-auth/react';
import Portfolio from '../../../../../models/Portfolio';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const job = await Portfolio.findById(req.query.id);
  await db.disconnect();
  res.send(job);
};
const putHandler = async (req, res) => {
  await db.connect();
  const job = await Portfolio.findById(req.query.id);
  if (job) {
    job.name = req.body.name;
    job.category = req.body.category;
    job.image = req.body.image;
    job.skills = req.body.skills;
    job.description = req.body.description;
    await job.save();
    await db.disconnect();
    res.send({ message: 'Portfolio updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Portfolio not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const job = await Portfolio.findById(req.query.id);
  if (job) {
    await job.remove();
    await db.disconnect();
    res.send({ message: 'Portfolio deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Portfolio not found' });
  }
};
export default handler;
