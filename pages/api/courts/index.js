import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import Court from '@/models/Court';

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
  try {
    const courts = await Court.find().sort({ name: 1 });
    res.json(courts);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create court
 */
async function create(req, res) {
  const body = JSON.parse(req?.body ?? '{}');

  try {
    const court = await Court.create(body);
    res.json(court);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
