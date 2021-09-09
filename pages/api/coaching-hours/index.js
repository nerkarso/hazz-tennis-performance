import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { User } from '@/models';
import CoachingHour from '@/models/CoachingHour';

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
 * Get all coaching hours
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const coachingHours = await CoachingHour.find(filter).sort(sort).populate({
      path: 'coach',
      model: User,
    });
    res.json(coachingHours);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create coaching hour
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const coachingHour = await CoachingHour.create(body);
    res.json(coachingHour);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
