const { Server } = require('socket.io');
const chatController = require('./controllers/chat.controller');
const notificationController = require('./controllers/notification.controller');

const port = process.env.PORT || 3001;
const io = new Server(port, {
  cors: true,
});

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  chatController(io, socket);
  notificationController(io, socket);
});
