const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const protectedController = require('../controllers/protectedController');

router.get('/', authenticateToken, protectedController.getProtectedData);

module.exports = router;