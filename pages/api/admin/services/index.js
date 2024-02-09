import { getSession } from 'next-auth/react';
import Service from '../../../../models/Service';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const postHandler = async (req, res) => {
  await db.connect();
  const newCourse = new Service({
    name: 'sample name',
    image: '/images/shirt1.jpg',
    price: 0,
    category: 'sample category',
    description: 'sample description',
    offer: 'our offer ',
    rating: 0,
    numReviews: 0,
  });

  const course = await newCourse.save();
  await db.disconnect();
  res.send({ message: 'Service created successfully', course });
};

const getHandler = async (req, res) => {
  await db.connect();
  const courses = await Service.find({});
  await db.disconnect();
  res.send(courses);
};
export default handler;
