import withAllowedMethods from '@/middlewares/withAllowedMethods';
import withDatabase from '@/middlewares/withDatabase';
import { Booking, User } from '@/models';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getAll(req, res);
  }
}

export default withAllowedMethods(withDatabase(handler), ['GET']);

/**
 * Get available coaches
 */
async function getAll(req, res) {
  const { query } = req;
  const filter = JSON.parse(query?.filter ?? '{}');
  let coachesFilter = { role: 'coach' };

  try {
    const bookings = await Booking.find(filter).select('coach');
    if (bookings.length > 0) {
      coachesFilter.$and = bookings.map(({ coach }) => ({
        _id: { $ne: coach },
      }));
    }
    const coaches = await User.find(coachesFilter).sort({ first_name: 1 });
    res.json(coaches);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
}
