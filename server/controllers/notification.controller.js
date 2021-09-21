module.exports = (io, socket) => {
  const onRefresh = () => {
    socket.broadcast.emit('notification:new');
  };

  socket.on('notification:refresh', onRefresh);
};
