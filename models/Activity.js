const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  category: {
    type: String,
  },
  action: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Activity || mongoose.model('Activity', schema);
