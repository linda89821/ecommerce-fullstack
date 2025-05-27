const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rebateBalance: {
    type: Number,
    default: 0
  },
  vipLevel: {
    type: String,
    default: "VIP0"
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
