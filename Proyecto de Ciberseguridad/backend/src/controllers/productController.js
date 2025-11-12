const { db } = require('../config/database');

// SEGURO: SQL Injection corregido con Prepared Statements
const getProducts = (req, res) => {
  const { category, search } = req.query;

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
