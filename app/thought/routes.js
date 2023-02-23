import { Router } from "express";
import thoughtController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  thoughtController
    .findAll()
    .then((thoughts) => {
      res.json(thoughts);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  thoughtController
    .findOne(req.params.id)
    .then((thought) => {
      res.json(thought);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/:userID", (req, res) => {
  thoughtController
    .create(req.params.userID, req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
