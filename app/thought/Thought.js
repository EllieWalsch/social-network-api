import { Schema } from "mongoose";

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, "Text required"],
    minLength: [1, "Must be at least 1 character long"],
    maxLength: [280, "Must be under 280 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: add getter to format the timestamp on query
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  // TODO: add reactions
});

export default thoughtSchema;
