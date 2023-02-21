// database client - connection
// Where we connect Node to Mongo DB using Mongoose

import mongoose from "mongoose";

export default () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/networkDB")
    .then(() => {
      console.info("Connected to database");
    })
    .catch((err) => {
      console.error("Error connecting to database", err.message);
    });
};
