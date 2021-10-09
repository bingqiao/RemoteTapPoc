var express = require('express');
var app = express();
app.use(express.json());

var http = require('http').Server(app);
var io = require('socket.io')(http, { serveClient: false });
var util = require('util');
var clients = [];
io.on('connection', function (socket) {
    clients.push(socket.id);
    var clientConnectedMsg = 'User connected ' + util.inspect(socket.id) + ', total: ' + clients.length;
    console.log(clientConnectedMsg);
    socket.on('disconnect', function () {
        clients.pop(socket.id);
        var clientDisconnectedMsg = 'User disconnected ' + util.inspect(socket.id) + ', total: ' + clients.length;
        console.log(clientDisconnectedMsg);
    })
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});

function sendServerCmd(cmd) {
    console.log('Command sent to user');
    io.emit('ServerCmd', cmd);
}

app.get('/', function (req, res) {
    res.send('hello world')
})

app.post('/event', function (req, res) {
    var cmd = req.body ? req.body.cmd : {};
    sendServerCmd(cmd);
    res.send(cmd);
})
