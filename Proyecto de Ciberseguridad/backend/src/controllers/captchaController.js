const svgCaptcha = require('svg-captcha');
const crypto = require('crypto');

// Store para captchas con información de seguridad
let captchaStore = {};

// Limpiar CAPTCHAs expirados cada 60 segundos
setInterval(() => {
  const now = Date.now();
  Object.keys(captchaStore).forEach(id => {
    if (now - captchaStore[id].createdAt > 10 * 60 * 1000) { // 10 minutos
      delete captchaStore[id];
    }
  });
}, 60000);

const generateCaptcha = (req, res) => {
  const captcha = svgCaptcha.create({
    size: 4,
    noise: 1,
    color: true
  });

  // SEGURO: ID único no predecible
  const captchaId = crypto.randomBytes(16).toString('hex');

  // Almacenar con metadata de seguridad
  captchaStore[captchaId] = {
    text: captcha.text.toLowerCase(),
    createdAt: Date.now(),
    attempts: 0,
    used: false
  };

  res.json({
    captchaId,
    captcha: captcha.data,
    // Solo envía la respuesta en modo desarrollo
    debug: process.env.NODE_ENV === 'development' ? captcha.text : undefined
  });
};

const verifyCaptcha = (req, res) => {
  const { captchaId, captchaText } = req.body;

  // Verificar que el CAPTCHA existe
  const captcha = captchaStore[captchaId];
  if (!captcha) {
    return res.json({ valid: false, error: 'Invalid CAPTCHA ID' });
  }

  // Verificar si ya fue usado
  if (captcha.used) {
    return res.json({ valid: false, error: 'CAPTCHA already used' });
  }

  // Verificar si expiró (5 minutos)
  const now = Date.now();
  if (now - captcha.createdAt > 5 * 60 * 1000) {
    delete captchaStore[captchaId];
    return res.json({ valid: false, error: 'CAPTCHA expired' });
  }

  // Incrementar intentos
  captcha.attempts++;

  // Verificar límite de intentos
  if (captcha.attempts > 3) {
    delete captchaStore[captchaId];
    return res.json({ valid: false, error: 'Too many attempts' });
  }

  // Verificar el texto del CAPTCHA
  if (captcha.text === captchaText.toLowerCase()) {
    // Marcar como usado
    captcha.used = true;
    return res.json({ valid: true });
  } else {
    return res.json({ valid: false, error: 'Invalid CAPTCHA' });
  }
};

module.exports = {
  generateCaptcha,
  verifyCaptcha,
  captchaStore
};
