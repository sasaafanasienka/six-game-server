const express = require('express');
const app = express();
const port = 8000; // Порт, на котором будет запущен сервер

app.get('/', (req, res) => {
  res.send({text: 'Hello world'});
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});