const { format } = require('date-fns');

export const formatDate = (value) => {
  return format(new Date(value), 'MMM dd, y HH:mm aa');
};
