const { format } = require('date-fns');

module.exports = function formatDate(value) {
  return format(new Date(value), 'MMM dd, y HH:mm aa');
};
