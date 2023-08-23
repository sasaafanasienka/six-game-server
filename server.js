const http = require('http');
const io = require('socket.io')(http);
const express = require('express');
const app = express();
const port = 8000; // Порт, на котором будет запущен сервер
const WebSocket = require('ws');

app.get('/', (req, res) => {
  res.send({text: 'Hello world'});
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// const Deck = require('./modules/deck');
// const Player = require('./modules/player');
// const getRandomId = require('./utils/getRandomId');
// const getRandomInteger = require('./utils/getRandomInteger');

class Game {
	constructor() {
		this.server = new WebSocket.Server({
			port: 8079,
		});
		this.deck = undefined;
		this.queue = [];
		this.data = {
			players: [],
			onTop: null,
			reverse: false,
		};
		this.config = {
			maxPLayers: 4,
		};
	}

	init() {
		this.server.on('connection', (socket) => {
      socket.send('connected');
      console.log('conneected');
		});
	}
}

const game = new Game();
game.init();