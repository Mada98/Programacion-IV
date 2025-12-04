const { db } = require('../config/database');

// SEGURO: SQL Injection corregido con Prepared Statements
const getProducts = (req, res) => {
  const { category, search } = req.query;

  // Validación adicional: detectar intentos de inyección SQL
  if (category) {
    // Detectar caracteres sospechosos típicos de SQL injection
    const suspiciousPatterns = [
      /'\s*(OR|AND)\s*'?\d*'?\s*=\s*'?\d*'?/i,
      /;\s*(DROP|DELETE|UPDATE|INSERT)/i,
      /UNION\s+SELECT/i,
      /--/,
      /#/,
      /\/\*/,
      /\bEXEC\b/i,
      /\bSLEEP\b/i
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(category)) {
        return res.json([]);
      }
    }
  }

  if (search) {
    const suspiciousPatterns = [
      /'\s*(OR|AND)\s*'?\d*'?\s*=\s*'?\d*'?/i,
      /;\s*(DROP|DELETE|UPDATE|INSERT)/i,
      /UNION\s+SELECT/i,
      /--/,
      /#/,
      /\/\*/
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(search)) {
        return res.json([]);
      }
    }
  }

  // SEGURO: Usar placeholders (?) en lugar de concatenación
  let query = 'SELECT * FROM products WHERE 1=1';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  if (search) {
    query += ' AND name LIKE ?';
    params.push(`%${search}%`);
  }

  // Ejecutar query con parámetros separados
  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Error en getProducts:', err);
      return res.status(500).json({ error: 'Error al buscar productos' });
    }
    res.json(results);
  });
};

module.exports = {
  getProducts
};
