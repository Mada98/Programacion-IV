const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {bruteForceDelay, loginLimiter, checkUsernameLimiter} = require ('../middleware/bruteForceProtection')



// Rutas de autenticación
// Orden importante: bruteForceDelay primero (para CAPTCHA), luego loginLimiter
router.post('/login', bruteForceDelay, loginLimiter, authController.login);
router.post('/register', authController.register);
router.post('/auth/verify', authController.verifyToken);
router.post('/check-username', checkUsernameLimiter, authController.checkUsername);

module.exports = router;
