import express from "express";
import userRoutes from "./user/routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default () => {
  app.listen(PORT, () => {
    console.info(`Server running at http://localhost:${PORT}`);
  });
};
