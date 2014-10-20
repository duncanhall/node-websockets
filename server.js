
var path = require('path');

require('dns').lookup(require('os').hostname(), function (err, add, fam) {

    if (err !== null || add === null) {
        console.error('Could not detect IP: ' + err);
    }
    else {
        var SERVER_ADDRESS = add;

        var express = require('express');
        var app = express();
        var server = require('http').createServer(app);
        var io = require('socket.io').listen(server);
        var relay = require(path.resolve('backend/io/SocketRelay'));

        app.use("/", express.static(__dirname + '/frontend/'));
        server.listen(8000);
        relay.init(io);
    }
});



