const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    send_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = { feedbackReplySchema: schema };
