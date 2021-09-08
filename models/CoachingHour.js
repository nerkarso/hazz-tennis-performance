const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: {
    type: Date,
  },
  duration: {
    type: Number,
    default: 0,
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.CoachingHour || mongoose.model('CoachingHour', schema);
