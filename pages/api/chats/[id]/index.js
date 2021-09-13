import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Chat, User } from '@/models';

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
 * Get chat by id
 */
async function getById(req, res) {
  const { id } = req.query;

  try {
    const chat = await Chat.findById(id)
      .populate({
        path: 'from',
        model: User,
      })
      .populate({
        path: 'to',
        model: User,
      });
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }
    res.json(chat);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete chat
 */
async function remove(req, res) {
  const { id } = req.query;

  try {
    const chat = await Chat.findById(id);
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }
    await chat.remove();
    res.json({ message: 'Chat deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
