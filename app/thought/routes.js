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
    .then((thoughts) => {
      res.json(thoughts);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
