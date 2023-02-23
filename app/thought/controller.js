import User from "../user/User.js";
import Thought from "./Thought.js";

const thoughtController = {
  async create(userID, thoughtBody) {
    const thought = await Thought.create(thoughtBody);

    return User.findByIdAndUpdate(
      { _id: userID },
      { $push: { thoughts: thought._id } },
      { new: true }
    );
  },
  findAll() {
    return Thought.find();
  },
  findOne(thoughtID) {
    return Thought.findById(thoughtID);
  },
  update(thoughtID, newInfo) {
    return Thought.findByIdAndUpdate(
      { _id: thoughtID },
      { $set: newInfo },
      { new: true }
    );
  },
  delete(thoughtID) {
    return Thought.findByIdAndDelete(thoughtID);
  },
};

export default thoughtController;
