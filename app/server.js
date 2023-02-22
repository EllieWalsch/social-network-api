import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

export default () => {
  app.listen(PORT, () => {
    console.info(`Server running at http://localhost:${PORT}`);
  });
};
