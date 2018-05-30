const app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  rtsp = require('rtsp-ffmpeg');
server.listen(6147);
var uri = 'rtsp://admin:PASSword@192.168.43.196:554/onvif1',
  stream = new rtsp.FFMpeg({ input: uri });
io.on('connection', function (socket) {
  console.log('connect Happened')
  var pipeStream = function (data) {
    socket.emit('data', data.toString('base64'));
  };
  stream.on('data', pipeStream);
  socket.on('disconnect', function () {
    stream.removeListener('data', pipeStream);
  });
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});