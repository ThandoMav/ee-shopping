import Service from '../../../models/Service';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const course = await Service.findById(req.query.id);
  await db.disconnect();
  res.send(course);
};

export default handler;
