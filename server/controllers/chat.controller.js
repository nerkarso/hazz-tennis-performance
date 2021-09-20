module.exports = (io, socket) => {
  const onJoinRoom = ({ room }) => {
    socket.join(room);
  };

  const onLeaveRoom = ({ room }) => {
    socket.leave(room);
  };

  const onSendMessage = ({ message, room }) => {
    io.to(room).emit('chat:newMessage', message);
  };

  socket.on('chat:joinRoom', onJoinRoom);
  socket.on('chat:leaveRoom', onLeaveRoom);
  socket.on('chat:sendMessage', onSendMessage);
};
