import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    // TODO: ADD UNIQUE VALIDATION
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    // TODO: ADD UNIQUE VALIDATION
    required: [true, "Email is required"],
    // TODO: ADD EMAIL VALIDATION
  },
  // TODO: add thoughts and friends
});

export default userSchema;
