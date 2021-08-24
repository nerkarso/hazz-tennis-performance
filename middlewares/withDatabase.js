import createConnection from '@/lib/mongodb';

/**
 * Middleware to connect to database
 */
export default function withDatabase(handler) {
  return async (req, res) => {
    try {
      await createConnection();
      return handler(req, res);
    } catch (ex) {
      return res.status(500).json({ error: ex.message });
    }
  };
}
