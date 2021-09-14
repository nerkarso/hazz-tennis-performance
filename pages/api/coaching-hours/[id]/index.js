import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { CoachingHour } from '@/models';

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
 * Get coaching hour by id
 */
async function getById(req, res) {
  const { id } = req.query;

  try {
    const coachingHour = await CoachingHour.findById(id);
    if (!coachingHour) {
      return res.status(404).json({ error: 'Coaching hour not found' });
    }
    res.json(coachingHour);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Update coaching hour
 */
async function update(req, res) {
  const { id } = req.query;
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { coach, date, duration } = body;

  try {
    const coachingHour = await CoachingHour.findById(id);
    if (!coachingHour) {
      return res.status(404).json({ error: 'Coaching hour not found' });
    }
    if (coach !== undefined && coach !== '') coachingHour.coach = coach;
    if (date !== undefined && date !== '') coachingHour.date = date;
    if (duration !== undefined && duration !== '') coachingHour.duration = duration;
    await coachingHour.save();
    res.json(coachingHour);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete coaching hour
 */
async function remove(req, res) {
  const { id } = req.query;

  try {
    const coachingHour = await CoachingHour.findById(id);
    if (!coachingHour) {
      return res.status(404).json({ error: 'Coaching hour not found' });
    }
    await coachingHour.remove();
    res.json({ message: 'Coaching hour deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
