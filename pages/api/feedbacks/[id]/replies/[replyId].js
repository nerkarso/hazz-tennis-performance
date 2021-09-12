import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Feedback } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'DELETE':
      return remove(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['DELETE']);

/**
 * Delete feedback reply
 */
async function remove(req, res) {
  const { id, replyId } = req.query;

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    const reply = feedback.replies.id(replyId);
    if (!reply) {
      return res.status(404).json({ error: 'Reply not found' });
    }
    reply.remove();
    await feedback.save();
    res.json({ message: 'Reply deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
