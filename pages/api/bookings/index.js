import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Booking, Court, User } from '@/models';

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
 * Get all bookings
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  const sort = JSON.parse(query?.sort ?? '{}');

  try {
    const bookings = await Booking.find(filter)
      .sort(sort)
      .populate({
        path: 'client',
        model: User,
      })
      .populate({
        path: 'coach',
        model: User,
      })
      .populate({
        path: 'location',
        model: Court,
      });
    res.json(bookings);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create booking
 */
async function create(req, res) {
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  try {
    const booking = await Booking.create(body);
    res.json(booking);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
