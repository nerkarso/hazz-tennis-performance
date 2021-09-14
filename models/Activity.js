const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    action: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
    user: {
      type: String,
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
