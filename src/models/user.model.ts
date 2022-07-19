import mongoose, { Schema } from 'mongoose';
import { UserDocType } from '../interfaces/utils.interface';

const UserSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 11,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  country: {
    type: String,
    required:true
  }
});


export default mongoose.model<UserDocType>('User', UserSchema);
