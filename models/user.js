const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

module.exports = model('User', userSchema);
