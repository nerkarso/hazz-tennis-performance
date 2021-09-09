const mongoose = require('mongoose');
const { feedbackReplySchema } = require('./FeedbackReply');

const schema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
    rating: {
      type: Number,
    },
    message: {
      type: String,
    },
    replies: [feedbackReplySchema],
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
