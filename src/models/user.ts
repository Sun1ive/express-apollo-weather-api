import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */

userSchema.set('toObject', { virtuals: true });

export default model('User', userSchema);
