const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'John',
        text: 'See ya',
        createdAt: 12221
    });

    socket.on('createMessage', (message) => {
        console.log('Create message', message);
    })

    socket.on('disconnect', () => {
        console.log('User was diconnected');
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
