module.exports = function formatDate(value) {
  const dateTime = new Date(value);
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString().substring(-1, 5);
  return `${date} ${time}`;
};
