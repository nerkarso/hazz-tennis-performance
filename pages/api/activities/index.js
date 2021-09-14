import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Activity, User } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getAll(req, res);
    case 'POST':
      return create(req, res);
    case 'DELETE':
      return removeAll(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['DELETE', 'GET', 'POST']);

/**
 * Get all activities
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const activities = await Activity.find(filter).sort(sort).populate({
      path: 'user',
      model: User,
    });
    res.json(activities);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create activity
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const activity = await Activity.create(body);
    res.json(activity);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete all activities
 */
async function removeAll(req, res) {
  try {
    await Activity.deleteMany();
    res.json({ message: 'Activities deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
