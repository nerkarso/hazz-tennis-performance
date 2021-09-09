const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatMessage',
      },
    ],
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.models.Chat || mongoose.model('Chat', schema);
