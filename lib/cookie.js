import { serialize } from 'cookie';

module.exports = function createCookie(name, value, options = {}) {
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
  options.path = '/';
  options.maxAge = 60 * 60 * 24 * 30; // 30 days
  return serialize(name, stringValue, options);
};
