import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the List of products");
});

router.get("/:id", (req, res) => {
  res.send(`Product with ID ${req.params.id} is displayed here.`);
});

router.post("/", (req, res) => {
  res.send("New product is created.");
});

export default router;