const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 5001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
