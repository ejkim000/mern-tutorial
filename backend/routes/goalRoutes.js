const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../constrollers/goalControllers");

router.route('/')
.get(getGoals)
.post(setGoals);

router.route('/:id')
.put(updateGoals)
.delete(deleteGoals);

// router.route('/')
//   .get("/", getGoals)
//   .post("/", setGoals)
//   .put("/:id", updateGoals)
//   .delete("/:id", deleteGoals);

module.exports = router;
