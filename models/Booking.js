const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    date_time: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    booking_status: {
      type: Number,
      default: 0,
    },
    payment_status: {
      type: Boolean,
      default: false,
    },
    total_hours: {
      type: Number,
      default: 0,
    },
    total_fees: {
      type: Number,
      default: 0,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Court',
      required: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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

module.exports = mongoose.models.Booking || mongoose.model('Booking', schema);
