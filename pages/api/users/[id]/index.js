import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import User from '@/models/User';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getById(req, res);
    case 'PUT':
      return update(req, res);
    case 'DELETE':
      return remove(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['GET', 'PUT', 'DELETE']);

/**
 * Get user by id
 */
async function getById(req, res) {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Update user
 */
async function update(req, res) {
  const { id } = req.query;
  const { first_name, last_name, email, password, image_url, role, address, phone } = JSON.parse(req.body);
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (first_name && first_name !== '') user.first_name = first_name;
    if (last_name && last_name !== '') user.last_name = last_name;
    if (email && email !== '') user.email = email;
    if (password && password !== '') user.password = password;
    if (image_url && image_url !== '') user.image_url = image_url;
    if (role && role !== '') user.role = role;
    if (address && address !== '') user.address = address;
    if (phone && phone !== '') user.phone = phone;
    await user.save();
    res.json(user);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete user
 */
async function remove(req, res) {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.remove();
    res.json({ message: 'User deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
