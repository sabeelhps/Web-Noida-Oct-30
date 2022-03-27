const express = require('express');
const socketio = require('socket.io');
const http = require('http'); //
const path = require('path');
const app = express();
const server = http.createServer(app); //this is http server
const io = socketio(server);



app.use('/', express.static(path.join(__dirname, 'public')));


const users = {};


io.on('connection', (socket) => {
    console.log(`User with ${socket.id} go connected!`);
    socket.on('send-msg', (data) => {
        console.log(`Client ${socket.id} said --> ${data.msg}`);
        socket.broadcast.emit('recived-msg', {
            msg: data.msg,
            username: users[socket.id]
        });
    });

    socket.on('login', (data) => {
        users[socket.id] = data.username;
        console.log(users);
    });

    socket.on('disconnect', () => {
        console.log(`User with userid ${socket.id} got disconnected`);
        delete users[socket.id];
        console.log(users);
    });

});



server.listen(3000, () => {
    console.log('Server running at port 3000');
});

