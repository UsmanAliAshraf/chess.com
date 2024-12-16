const express = require('express');
const http = require('http');
const socket= require('socket.io');
const {chess, Chess} = require('chess.js');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = 'W';

app.set('view engine', 'ejs');
app.use(express.static (path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});