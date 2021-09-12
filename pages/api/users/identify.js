import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return getByEmail(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['POST']);

/**
 * Get user by email
 */
async function getByEmail(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { email } = body;

  try {
    const user = await User.findOne({ email: email });
    if (!user || user?.closed) {
      return res.status(404).json({ error: 'This account does not exist' });
    }
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
