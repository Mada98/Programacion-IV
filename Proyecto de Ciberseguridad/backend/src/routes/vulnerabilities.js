const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const vulnerabilityController = require('../controllers/vulnerabilityController');
const { uploadMiddleware, uploadFile } = require('../controllers/uploadController');

router.use(cookieParser());

const csrfProtection = csrf({ 
  cookie: {
    key: '_csrf',
    path: '/',
    httpOnly: true,
    secure: false, 
    sameSite: 'strict' 
  }
});

const validateOrigin = (req, res, next) => {
  const origin = req.get('origin');
  const allowedOrigins = ['http://localhost:3000']; 


  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Invalid Origin' });
  }
  next();
};


router.get('/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

router.post('/transfer', 
  validateOrigin, 
  csrfProtection, 
  vulnerabilityController.transfer
);


router.post('/ping', vulnerabilityController.ping);
router.get('/file', vulnerabilityController.readFile);
router.post('/upload', uploadMiddleware, uploadFile);


router.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({ error: 'CSRF token validation failed' });
  }
  next(err);
});

module.exports = router;