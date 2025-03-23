import express from 'express';
import path from 'path';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 3000;

// Показуємо статичні файли
app.use(express.static('public'));
app.use(express.static('.'));

// Підключення до бази даних
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Потрібно для підключення до Render
});

// Перевірка підключення до бази
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`База даних підключена! Час: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(`Помилка підключення до бази: ${err.message}`);
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});


// Запускаємо сайт
app.listen(PORT, () => {
  console.log(`Сайт працює на порту ${PORT}`);
});

