import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Booking, Feedback, User } from '@/models';

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
 * Get all feedbacks
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const feedbacks = await Feedback.find(filter)
      .sort(sort)
      .populate({
        path: 'booking',
        model: Booking,
      })
      .populate({
        path: 'user',
        model: User,
      })
      .populate({
        path: 'replies',
        populate: {
          path: 'user',
          model: User,
        },
      });
    res.json(feedbacks);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create feedback
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const feedback = await Feedback.create(body);
    res.json(feedback);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
