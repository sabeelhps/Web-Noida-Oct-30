const express = require('express');
const socketio = require('socket.io');
const http = require('http'); //
const path = require('path');
const app = express();
const server = http.createServer(app); //this is http server
const io = socketio(server);



app.use('/', express.static(path.join(__dirname, 'public')));



io.on('connection', (socket) => {
    socket.on('send-msg', (data) => {
        console.log(`Client ${socket.id} said --> ${data.msg}`);
        io.emit('recived-msg', {
            msg: data.msg,
            id:socket.id
        });
    });
});







server.listen(3000, () => {
    console.log('Server running at port 3000');
});







