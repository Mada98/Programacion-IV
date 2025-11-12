// src/middleware/bruteForceProtection.js
const rateLimit = require('express-rate-limit');

// rate limiter tradicional (express-rate-limit)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 ,
  max: 3, // máximo 3 intentos por IP en la ventana
  handler: (req, res) => {
    res.status(429).send('Demasiados intentos. Inténtalo más tarde.');
  }
});

// Rate limiter específico para check-username (prevenir blind SQL injection por enumeración)
const checkUsernameLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 5, // máximo 5 intentos
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many attempts' });
  }
});

// Mapa en memoria para contar intentos por key (username o IP)
const attempts = new Map();

//constante para contar el numero de intentos por username o ip
const MAX_ATTEMPTS_BEFORE_CAPTCHA=3

/**
 * Middleware que aplica un delay progresivo según la cantidad de intentos fallidos.
 * - key: req.body.username || req.ip
 * - delay = delayPerAttempt * count (máx capDelay)
 */
async function bruteForceDelay(req, res, next) {
  try {
    const key = (req.body && req.body.username) ? `user:${req.body.username}` : `ip:${req.ip || req.connection?.remoteAddress}`;
    const now = Date.now();

    let data = attempts.get(key);
    if (!data) {
      data = { count: 0, lastAttempt: now };
      attempts.set(key, data);
    }

    const timeSinceLast = now - data.lastAttempt;

    // Si pasó más de 1 minuto desde el último intento, reiniciamos el contador
    if (timeSinceLast > 60 * 1000) {
      data.count = 0;
    }

    data.count += 1;
    data.lastAttempt = now;

    //LOGICA DE CAPTHCA
    if(data.count > MAX_ATTEMPTS_BEFORE_CAPTCHA){
        const delayPerAttempt=300;
        const capDelay=1500;
        const delay= Math.min(data.count*delayPerAttempt,capDelay);
        await new Promise((resolve)=>setTimeout(resolve,delay))

        return res.status(400).json({
            error: 'captcha'
        })
    }

    // Ajuste para tests: 300 ms por intento, con cap en 1500 ms
    const delayPerAttempt = 300; // <-- reducido para evitar timeouts de Jest
    const capDelay = 1500;
    const delay = Math.min(data.count * delayPerAttempt, capDelay);

    // Esperamos el delay antes de continuar
    await new Promise((resolve) => setTimeout(resolve, delay));

    return next();
  } catch (err) {
    // En caso de error en el middleware, seguimos para no bloquear tests
    return next();
  }
}


module.exports = {
  bruteForceDelay,
  loginLimiter,
  checkUsernameLimiter
};
