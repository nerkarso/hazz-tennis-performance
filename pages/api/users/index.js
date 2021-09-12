import { createCookie } from '@/lib';
import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';

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
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const users = await User.find(filter).sort(sort);
    res.json(users);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create user
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const user = await User.create(body);
    res.setHeader('Set-Cookie', [createCookie('account_id', user._id.toString()), createCookie('account_role', user.role)]);
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
