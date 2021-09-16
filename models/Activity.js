const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    action: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.models.Activity || mongoose.model('Activity', schema);
