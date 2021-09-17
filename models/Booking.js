const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    date_time: {
      type: Date,
    },
    duration: {
      type: Number,
      default: 0,
    },
    booking_status: {
      type: Number,
      default: 0,
    },
    payment_type: {
      type: String,
      default: 'cash',
    },
    payment_status: {
      type: Boolean,
      default: false,
    },
    payment_details: {
      type: mongoose.Schema.Types.Mixed,
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
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    coach: {
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

module.exports = mongoose.models.Booking || mongoose.model('Booking', schema);
