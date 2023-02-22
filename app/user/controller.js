import initDBClient from "../client.js";
import User from "./User.js";

const controller = {
  create(newUser) {
    return User.create(newUser);
  },
};

await initDBClient();

controller
  .create({
    username: "elliewalsch",
    email: "ellie@email.com",
  })
  .then((user) => {
    console.info(user);
  })
  .catch((error) => {
    console.error(error.message);
  });
