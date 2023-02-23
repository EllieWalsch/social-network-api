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
  addReaction(thoughtID, reactionBody) {
    return Thought.findByIdAndUpdate(
      { _id: thoughtID },
      { $push: { reactions: reactionBody } },
      { new: true }
    );
  },
  deleteReaction(thoughtID, reactionID) {
    return Thought.findByIdAndUpdate(
      { _id: thoughtID },
      { $pull: { reactions: { _id: reactionID } } },
      { new: true }
    );
  },
};

export default thoughtController;
