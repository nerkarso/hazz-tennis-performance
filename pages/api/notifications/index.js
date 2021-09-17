import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Notification } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getAll(req, res);
    case 'POST':
      return create(req, res);
    case 'PUT':
      return updateAll(req, res);
    case 'DELETE':
      return removeAll(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['DELETE', 'GET', 'POST', 'PUT']);

/**
 * Get all notifications
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const notifications = await Notification.find(filter).sort(sort);
    res.json(notifications);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create notification
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const notification = await Notification.create(body);
    res.json(notification);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Update all notifications
 */
async function updateAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const _body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { body, read, title, url } = _body;

  try {
    let notification = {};
    if (body !== undefined && body !== '') notification.body = body;
    if (read !== undefined && read !== '') notification.read = read;
    if (title !== undefined && title !== '') notification.title = title;
    if (url !== undefined && url !== '') notification.url = url;
    const result = await Notification.updateMany(filter, notification);
    res.json({ message: `Notifications updated: ${result.nModified}` });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete all notifications
 */
async function removeAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');

  try {
    const result = await Notification.deleteMany(filter);
    res.json({ message: `Notifications deleted: ${result.nModified}` });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
