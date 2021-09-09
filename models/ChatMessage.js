const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    send_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: true,
  },
);

module.exports = mongoose.models.ChatMessage || mongoose.model('ChatMessage', schema);
