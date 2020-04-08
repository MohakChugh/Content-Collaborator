const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 8080

let data = '';

io.on('connection', socket => {
    socket.broadcast.emit("change", data)
    console.log('Connection Established!')
    socket.on('update', val => {
        data = val
        socket.broadcast.emit("change", data)
    });
})

http.listen(port);