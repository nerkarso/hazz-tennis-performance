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
 * Get user notifications count
 */
async function getByUser(req, res) {
  const { id } = req.query;

  try {
    const count = await getNotificationsCount({ read: false, user: id });
    res.json({ count: count });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Counts number of notifications
 */
function getNotificationsCount(filter) {
  return new Promise((resolve, reject) => {
    Notification.countDocuments(filter, (error, count) => {
      if (error) reject(error);
      resolve(count);
    });
  });
}
