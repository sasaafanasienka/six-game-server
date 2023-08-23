const http = require('http');
const io = require('socket.io')(http);
const express = require('express');
const app = express();
const port = 8000; // Порт, на котором будет запущен сервер

app.get('/', (req, res) => {
  res.send({text: 'Hello world'});
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

const server = http.createServer();
io.listen(server);

server.listen(3000, () => {
  console.log('WebSocket server started on port 3000');
});

// Обработка веб-сокет соединений
io.on('connection', (socket) => {
  console.log('connection')
});