import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import Feedback from '@/models/Feedback';

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
 * Update feedback
 */
async function update(req, res) {
  const { id } = req.query;
  const { booking, rating, message } = req.body;
  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    if (booking) feedback.booking = booking;
    if (rating) feedback.rating = rating;
    if (message) feedback.message = message;
    await feedback.save();
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
