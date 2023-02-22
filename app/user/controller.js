import initDBClient from "../client.js";
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
};

await initDBClient();

userController
  .addFriend("63f6402089ea70dd5c855f2a", "63f6432df14365ada36b9c75")
  .then((user) => {
    console.info(user);
  })
  .catch((err) => {
    console.error(err.message);
  });

export default userController;
