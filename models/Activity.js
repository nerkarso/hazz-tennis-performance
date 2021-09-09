const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    action: {
      type: String,
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
