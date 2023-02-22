import { Router } from "express";
import userController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  userController.findAll().then((users) => {
    res.json(users);
  });
});

export default router;
