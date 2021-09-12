import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Feedback } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return create(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['POST']);

/**
 * Add reply to feedback
 */
async function create(req, res) {
  const { id } = req.query;
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    feedback.replies.push(body);
    await feedback.save();
    res.json({ message: 'Reply added to feedback' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
