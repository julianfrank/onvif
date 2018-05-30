Stream = require('node-rtsp-stream');
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:PASSword@192.168.43.196:554/onvif1',
  wsPort: 9999
});