const express = require("express");
const router = express.Router();

router
.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
})
.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
})
.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
})
.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
})

module.exports = router;