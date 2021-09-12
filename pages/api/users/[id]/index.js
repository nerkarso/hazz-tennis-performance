import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';

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
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { address, closed, email, first_name, image_url, last_name, password, phone, role } = body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (address !== undefined && address !== '') user.address = address;
    if (closed !== undefined && closed !== '') user.closed = closed;
    if (email !== undefined && email !== '') user.email = email;
    if (first_name !== undefined && first_name !== '') user.first_name = first_name;
    if (image_url !== undefined && image_url !== '') user.image_url = image_url;
    if (last_name !== undefined && last_name !== '') user.last_name = last_name;
    if (password !== undefined && password !== '') user.password = password;
    if (phone !== undefined && phone !== '') user.phone = phone;
    if (role !== undefined && role !== '') user.role = role;
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
