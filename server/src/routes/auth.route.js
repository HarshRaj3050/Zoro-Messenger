const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const isAuthenticated = require('../middleware/auth.middleware');

router.post('/register', authController.userRegister);
router.get("/verify-email", authController.verifyEmail);
router.post('/login', authController.userLogin);
router.post('/logout', isAuthenticated, authController.logoutUser);


module.exports = router;