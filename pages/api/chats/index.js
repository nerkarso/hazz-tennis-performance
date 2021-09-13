import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Chat, User } from '@/models';

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
 * Get all chats
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const chats = await Chat.find(filter)
      .sort(sort)
      .populate({
        path: 'from',
        model: User,
      })
      .populate({
        path: 'to',
        model: User,
      });
    res.json(chats);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create chat
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { from, to } = body;

  try {
    let chat = await Chat.find({
      $or: [
        { from: from, to: to },
        { from: to, to: from },
      ],
    });
    if (chat) {
      return res.json(chat);
    }
    chat = await Chat.create(body);
    res.json(chat);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
