const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const { protect } = require('../middleware/authMiddleware');

// make routes private by adding "protect" middleware
// Before: router.route('/').get(getGoals) .post(setGoal);
router.route('/').get(protect, getGoals) .post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

// router.route('/')
//   .get("/", getGoals)
//   .post("/", setGoal)
//   .put("/:id", updateGoal)
//   .delete("/:id", deleteGoal);

module.exports = router;
