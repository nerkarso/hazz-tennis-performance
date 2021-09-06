const { format } = require('date-fns');

module.exports = function formatDate(value) {
  return format(new Date(value), 'EEE dd MMM y HH:mm');
};
