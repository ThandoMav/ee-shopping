import { getSession } from 'next-auth/react';
import Service from '../../../../../models/Service';
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
  const course = await Service.findById(req.query.id);
  await db.disconnect();
  res.send(course);
};
const putHandler = async (req, res) => {
  await db.connect();
  const course = await Service.findById(req.query.id);
  if (course) {

    course.name = req.body.name;
    course.category = req.body.category;
    course.rating = req.body.rating;
    course.numReviews = req.body.numReviews;
    course.price = req.body.price;
    course.image = req.body.image;
    course.offer = req.body.offer;
    course.description = req.body.description;
    await course.save();
    await db.disconnect();
    res.send({ message: 'Service updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Service not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const course = await Service.findById(req.query.id);
  if (course) {
    await course.remove();
    await db.disconnect();
    res.send({ message: 'Service deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Service not found' });
  }
};
export default handler;
