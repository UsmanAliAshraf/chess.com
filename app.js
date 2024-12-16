const express = require('express');
const http = require('http');
const socket= require('socket.io');
const {Chess} = require('chess.js');
const path = require('path');
const { title } = require('process');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = 'W';

app.set('view engine', 'ejs');
app.use(express.static (path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {title: 'Chess Game'});
});



io.on("connection", (uniqueSocket) => {
    console.log("Connected");
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});