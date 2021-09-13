import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Chat } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return create(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['POST']);

/**
 * Add message to chat
 */
async function create(req, res) {
  const { id } = req.query;
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const chat = await Chat.findById(id);
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }
    chat.messages.push(body);
    await chat.save();
    res.json({ message: 'Message added to chat' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
