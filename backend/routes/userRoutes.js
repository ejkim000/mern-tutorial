const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userConstroller');

// '/api/users'
router.post('/', registerUser)


module.exports = router;