const { db } = require('../config/database');

// SEGURO: SQL Injection corregido con Prepared Statements
const getProducts = (req, res) => {
  const { category, search } = req.query;

  // Validación adicional: detectar intentos de inyección SQL
  if (category) {
    // Detectar caracteres sospechosos típicos de SQL injection
    const suspiciousPatterns = [
      /'\s*(OR|AND)\s*'?\d*'?\s*=\s*'?\d*'?/i,  // ' OR '1'='1
      /;\s*(DROP|DELETE|UPDATE|INSERT)/i,        // ; DROP TABLE
      /UNION\s+SELECT/i,                         // UNION SELECT
      /--/,                                       // -- comentarios
      /#/,                                        // # comentarios
      /\/\*/,                                     // /* comentarios
      /\bEXEC\b/i,                               // EXEC
      /\bSLEEP\b/i                               // SLEEP
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(category)) {
        console.warn('Intento de SQL injection detectado:', {
          category,
          ip: req.ip,
          timestamp: new Date()
        });
        // Devolver array vacío sin error para no revelar información
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
        console.warn('Intento de SQL injection detectado en search:', {
          search,
          ip: req.ip,
          timestamp: new Date()
        });
        return res.json([]);
      }
    }
  }

  // SEGURO: Usar placeholders (?) en lugar de concatenación
  let query = 'SELECT * FROM products WHERE 1=1';
  const params = []; // Array para almacenar los parámetros

  if (category) {
    query += ' AND category = ?'; // Placeholder en lugar de concatenación
    params.push(category);         // Agregar el valor al array
  }

  if (search) {
    query += ' AND name LIKE ?';   // Placeholder para LIKE
    params.push(`%${search}%`);    // El % va en el parámetro, no en el query
  }

  // Ejecutar query con parámetros separados
  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Error en getProducts:', err); // Log interno
      return res.status(500).json({ error: 'Error al buscar productos' }); // No exponer detalles
    }
    res.json(results);
  });
};

module.exports = {
  getProducts
};
