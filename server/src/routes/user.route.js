const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const isAuthenticated = require('../middleware/auth.middleware');

router.get('/get-profile', isAuthenticated, userController.getProfile);


module.exports = router;