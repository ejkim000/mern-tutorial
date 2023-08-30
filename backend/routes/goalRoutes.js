const express = require("express");
const router = express.Router();
const { getGoals, postGoals, putGoals, deleteGoals } = require("../constrollers/goalControllers");

router
.get("/", getGoals)
.post("/", postGoals)
.put("/:id", putGoals)
.delete("/:id", deleteGoals)

module.exports = router;