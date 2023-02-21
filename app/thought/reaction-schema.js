import { Schema, Types } from "mongoose";

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: [true, "Input is required"],
    maxLength: [280, "Must be under 280 characters long"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: add getter to format the timestamp on query
  },
});

export default reactionSchema;
