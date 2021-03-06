import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Court } from '@/models';

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
 * Get court by id
 */
async function getById(req, res) {
  const { id } = req.query;

  try {
    const court = await Court.findById(id);
    if (!court) {
      return res.status(404).json({ error: 'Court not found' });
    }
    res.json(court);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Update court
 */
async function update(req, res) {
  const { id } = req.query;
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { address, city, name } = body;

  try {
    const court = await Court.findById(id);
    if (!court) {
      return res.status(404).json({ error: 'Court not found' });
    }
    if (address !== undefined && address !== '') court.address = address;
    if (city !== undefined && city !== '') court.city = city;
    if (name !== undefined && name !== '') court.name = name;
    await court.save();
    res.json(court);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete court
 */
async function remove(req, res) {
  const { id } = req.query;

  try {
    const court = await Court.findById(id);
    if (!court) {
      return res.status(404).json({ error: 'Court not found' });
    }
    await court.remove();
    res.json({ message: 'Court deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
