const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
    },
    message: {
      type: String,
    },
    replies: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        message: {
          type: String,
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

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', schema);
