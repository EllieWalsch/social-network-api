import User from "./User.js";

const userController = {
  create(newUser) {
    return User.create(newUser);
  },
  findAll() {
    return User.find();
  },
  findOne(userID) {
    return User.findById(userID);
  },
  update(userID, newInfo) {
    return User.findByIdAndUpdate(
      { _id: userID },
      { $set: newInfo },
      { new: true }
    );
  },
  delete(userID) {
    return User.findByIdAndDelete(userID);
  },
  addFriend(userID, friendID) {
    return User.findByIdAndUpdate(
      { _id: userID },
      { $push: { friends: friendID } },
      { new: true }
    );
  },
  deleteFriend(userID, friendID) {
    return User.findByIdAndUpdate(
      { _id: userID },
      { $pull: { friends: friendID } },
      { new: true }
    );
  },
};

export default userController;
