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

router.put("/:id", (req, res) => {
  thoughtController
    .update(req.params.id, req.body)
    .then((thought) => {
      res.json(thought);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  thoughtController
    .delete(req.params.id)
    .then(() => {
      res.json({ message: "thought deleted" });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.put("/:thoughtId/reactions", (req, res) => {
  thoughtController
    .addReaction(req.params.thoughtId, req.body)
    .then((thought) => {
      res.json(thought);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
