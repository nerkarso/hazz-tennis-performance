const mongoose = require('mongoose');
const { feedbackReplySchema } = require('./FeedbackReply');

const schema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
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
