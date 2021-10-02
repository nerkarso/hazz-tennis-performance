import { createCookie } from '@/lib';
import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return create(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['POST']);

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
