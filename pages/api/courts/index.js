import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Court } from '@/models';

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
 * Get all courts
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const courts = await Court.find(filter).sort(sort);
    res.json(courts);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create court
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const court = await Court.create(body);
    res.json(court);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
