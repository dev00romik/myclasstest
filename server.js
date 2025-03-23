import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Показуємо статичні файли
app.use(express.static('public'));
app.use(express.static('.'));

// Запускаємо сайт
app.listen(PORT, () => {
  console.log(`Сайт працює на порту ${PORT}`);
});