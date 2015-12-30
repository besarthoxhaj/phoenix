const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 9009 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
    ws.send('hello');
  });
  ws.send('something');
});
