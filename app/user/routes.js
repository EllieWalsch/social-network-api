import { Router } from "express";
import userController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  userController
    .findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  userController
    .findOne(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  userController
    .create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  userController
    .update(req.params.id, req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  userController
    .delete(req.params.id)
    .then(() => {
      res.json({ message: "user deleted" });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
