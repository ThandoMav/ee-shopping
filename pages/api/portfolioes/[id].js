import Portfolio from '../../../models/Portfolio';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const institution = await Portfolio.findById(req.query.id);
  await db.disconnect();
  res.send(institution);
};

export default handler;
