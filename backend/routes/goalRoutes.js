const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

router.route('/')
.get(getGoals)
.post(setGoal);

router.route('/:id')
.put(updateGoal)
.delete(deleteGoal);

// router.route('/')
//   .get("/", getGoals)
//   .post("/", setGoal)
//   .put("/:id", updateGoal)
//   .delete("/:id", deleteGoal);

module.exports = router;
