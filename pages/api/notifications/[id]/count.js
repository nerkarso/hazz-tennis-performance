import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Notification } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getByUser(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['GET']);

/**
 * Get number of notifications by user
 */
async function getByUser(req, res) {
  const { id } = req.query;

  try {
    const count = await Notification.countDocuments({ read: false, user: id });
    res.json({ count: count });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
