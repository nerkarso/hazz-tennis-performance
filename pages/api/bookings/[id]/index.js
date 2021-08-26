import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import Booking from '@/models/Booking';

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
 * Get booking by id
 */
async function getById(req, res) {
  const { id } = req.query;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(booking);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Update booking
 */
async function update(req, res) {
  const { id } = req.query;
  const { date_time, duration, booking_status, payment_status, total_hours, total_fees, location, client, coach } = req.body;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    if (date_time) booking.date_time = date_time;
    if (duration) booking.duration = duration;
    if (booking_status) booking.booking_status = booking_status;
    if (payment_status) booking.payment_status = payment_status;
    if (total_hours) booking.total_hours = total_hours;
    if (total_fees) booking.total_fees = total_fees;
    if (location) booking.location = location;
    if (client) booking.client = client;
    if (coach) booking.coach = coach;
    await booking.save();
    res.json(booking);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Delete booking
 */
async function remove(req, res) {
  const { id } = req.query;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    await booking.remove();
    res.json({ message: 'Booking deleted' });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
