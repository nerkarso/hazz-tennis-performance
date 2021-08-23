const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  send_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.ChatMessage || mongoose.model('ChatMessage', schema);
