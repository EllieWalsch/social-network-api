import { model, Schema } from "mongoose";
import reactionSchema from "./reaction-schema.js";

const thoughtSchema = new Schema(
  {
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
    reactions: [reactionSchema],
  },
  {
    new: true,
    runValidators: true,
    strict: "throw",
    toJSON: { virtuals: true, getters: true },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

export default model("Thought", thoughtSchema);
