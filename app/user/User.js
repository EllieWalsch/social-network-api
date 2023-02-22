import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    validate: {
      async validator(username) {
        const duplicate = await mongoose.models.Student.findOne({ username });

        // inverse the boolean value if duplicate is found
        return !duplicate;
      },
      message: "Duplicate username",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      async validator(email) {
        const duplicate = await mongoose.models.Student.findOne({ email });

        // Inverse the boolean value if duplicate is found
        return !duplicate;
      },
      message: "Duplicate email",
    },
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Invalid email"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// TODO: Create a virtual called friendCount that retrieves the length of the user's friends array field on query

export default model("User", userSchema);
