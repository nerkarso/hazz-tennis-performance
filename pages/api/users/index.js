import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import User from '@/models/User';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getAll(req, res);
    case 'POST':
      return create(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['GET', 'POST']);

/**
 * Get all users
 */
async function getAll(req, res) {
  try {
    const users = await User.find().sort({ first_name: 1 });
    res.json(users);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create a new user
 */
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
