import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import Booking from '@/models/Booking';

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
  try {
    const bookings = await Booking.find().sort({ created_at: -1, booking_status: 0 });
    res.json(bookings);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create a new booking
 */
async function create(req, res) {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
