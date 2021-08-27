import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import Feedback from '@/models/Feedback';

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
  try {
    const feedbacks = await Feedback.find().sort({ created_at: -1 });
    res.json(feedbacks);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create a new feedback
 */
async function create(req, res) {
  try {
    const feedback = await Feedback.create(req.body);
    res.json(feedback);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
