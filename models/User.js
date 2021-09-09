const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    image_url: {
      type: String,
    },
    role: {
      type: String,
      default: 'client',
    },
    address: {
      type: String,
    },
    phone: {
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

module.exports = mongoose.models.User || mongoose.model('User', schema);
