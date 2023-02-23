import initDBClient from "../client.js";
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
};

await initDBClient();

thoughtController
  .create("63f6402089ea70dd5c855f2a", {
    thoughtText: "Hello",
    username: "grantapplegate",
  })
  .then((user) => {
    console.info(user);
  })
  .catch((error) => {
    console.error(error.message);
  });

export default thoughtController;
