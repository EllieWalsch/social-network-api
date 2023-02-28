import dayjs from "dayjs";
import { Schema, Types } from "mongoose";

const reactionSchema = new Schema(
  {
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
      get(createdAtVal) {
        return dayjs(createdAtVal).format("MMM DD, YYYY [at] hh:mm a");
      },
    },
  },
  {
    new: true,
    versionKey: false,
    runValidators: true,
    strict: "throw",
    toJSON: { getters: true, virtuals: true },
    id: false,
  }
);

export default reactionSchema;
