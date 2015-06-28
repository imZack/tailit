var express = require('express');
var serveStatic = require('serve-static')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  io.sockets.emit('data', line);
  console.log(line);
});

app.use(serveStatic(__dirname + '/public'));

var port = +process.env.PORT || 8080;

server.listen(port);
console.log('Listen on: ' + port);
