import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Booking, Court, Notification, User } from '@/models';
import { format } from 'date-fns';

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
    await createOwnersNotification(booking);
    res.json(booking);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}

/**
 * Create notification for owners
 */
async function createOwnersNotification(booking) {
  const owners = await User.find({ role: 'owner' });
  const client = await User.findById(booking?.client);
  const location = await Court.findById(booking?.location);

  return Promise.allSettled(
    owners.map((owner) =>
      Notification.create({
        title: `New booking by ${client?.first_name} ${client?.last_name}`,
        body: `Lesson on ${format(new Date(booking?.date_time), 'MMM dd, y HH:mm:ss aa')} at ${location?.name}${location?.city ? `, ${location?.city}` : ''}.`,
        user: owner?._id,
        url: `/owner/bookings/${booking._id}`,
      }),
    ),
  );
}
