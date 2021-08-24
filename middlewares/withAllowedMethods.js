/**
 * Middleware for checking which HTTP methods are allowed
 */
export default function withAllowedMethods(handler, methods) {
  return (req, res) => {
    // Method is allowed
    if (methods.includes(req.method)) {
      return handler(req, res);
    }
    // Allowed methods
    res.setHeader('Allow', methods);
    // Method is not allowed
    return res.status(405).json({
      error: 'Method Not Allowed',
    });
  };
}
