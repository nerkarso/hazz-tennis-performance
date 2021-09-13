const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    messages: [
      {
        message: {
          type: String,
        },
        from: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        created_at: {
          type: Date,
          default: Date.now,
        },
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
