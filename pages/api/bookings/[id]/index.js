import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Booking, Court, Notification, User } from '@/models';
import { format } from 'date-fns';

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
    const booking = await Booking.findById(id)
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
  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  const { booking_status, client, coach, date_time, duration, location, notify_client, notify_coach, payment_details, payment_status, payment_type, total_fees, total_hours } = body;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    if (booking_status !== undefined && booking_status !== '') booking.booking_status = booking_status;
    if (client !== undefined && client !== '') booking.client = client;
    if (coach !== undefined && coach !== '') booking.coach = coach;
    if (date_time !== undefined && date_time !== '') booking.date_time = date_time;
    if (duration !== undefined && duration !== '') booking.duration = duration;
    if (location !== undefined && location !== '') booking.location = location;
    if (payment_details !== undefined && payment_details !== '') booking.payment_details = payment_details;
    if (payment_status !== undefined && payment_status !== '') booking.payment_status = payment_status;
    if (payment_type !== undefined && payment_type !== '') booking.payment_type = payment_type;
    if (total_fees !== undefined && total_fees !== '') booking.total_fees = total_fees;
    if (total_hours !== undefined && total_hours !== '') booking.total_hours = total_hours;
    await booking.save();
    if (notify_client) await createUserNotification({ booking, role: 'client', userId: booking?.client });
    if (notify_coach) await createUserNotification({ booking, role: 'coach', userId: booking?.coach });
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

/**
 * Create notification for user
 */
async function createUserNotification({ booking, role, userId }) {
  const { booking_status, date_time } = booking;
  const client = await User.findById(booking?.client);
  const coach = await User.findById(booking?.coach);
  const location = await Court.findById(booking?.location);

  const getBookingStatus = (status) => (status === -1 ? 'declined' : status === 1 ? 'confirmed' : 'pending');
  const getBookingDate = (value) => format(new Date(value), 'MMM dd, y HH:mm:ss aa');
  const getBookingLocation = ({ name, city }) => `${name}${city ? `, ${city}` : ''}`;
  const getUser = (role) => (role === 'coach' ? `${client?.first_name} ${client?.last_name}` : `${coach?.first_name} ${coach?.last_name}`);

  return Notification.create({
    title: `Booking ${getBookingStatus(booking_status)}`,
    body: `Lesson with ${getUser(role)} on ${getBookingDate(date_time)} at ${getBookingLocation(location)}.`,
    user: userId,
    url: `/${role}/bookings/${booking?._id}/details`,
  });
}
