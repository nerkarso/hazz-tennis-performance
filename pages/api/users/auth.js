import { createCookie } from '@/lib';
import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return authenticate(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['POST']);

/**
 * Authenticate user
 */
async function authenticate(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { email, password } = body;

  try {
    const user = await User.findOne({ email: email });
    if (!user || user?.closed) {
      return res.status(404).json({ error: 'This account does not exist' });
    }
    const isMatch = await User.findOne({
      email: email,
      password: password,
    });
    if (!isMatch) {
      return res.status(401).json({ error: 'Wrong password' });
    }
    res.setHeader('Set-Cookie', [createCookie('account_id', user._id.toString()), createCookie('account_role', user.role)]);
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
