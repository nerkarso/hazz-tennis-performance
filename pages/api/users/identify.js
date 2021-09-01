import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import User from '@/models/User';

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
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: 'This account does not exist' });
    }
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
