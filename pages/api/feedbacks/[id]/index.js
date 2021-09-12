import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Feedback } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getById(req, res);
    case 'DELETE':
      return remove(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['GET', 'DELETE']);

/**
 * Get feedback by id
 */
async function getById(req, res) {
  const { id } = req.query;

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete feedback
 */
async function remove(req, res) {
  const { id } = req.query;

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    await feedback.remove();
    res.json({ message: 'Feedback deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
