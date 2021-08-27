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
 * Get all replies for a feedback
 */
async function getAll(req, res) {
  const { id } = req.query;
  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.json(feedback.replies);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Add reply to feedback
 */
async function create(req, res) {
  const { id } = req.query;
  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    feedback.replies.push(req.body);
    await feedback.save();
    res.json({ message: 'Reply added to feedback' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
