const pool = require('../config/database');

async function index(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
}

module.exports = { index };
