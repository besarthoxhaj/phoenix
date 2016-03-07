'use strict';

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 9009 });

/**
 * @param  {String}
 * @param  {Object}
 */
function message (ws,message,flags) {
  console.log('ws',ws,message);
  ws.send('something');
}

/**
 * @return {}
 */
function close (one,two) {
  console.log('arguments',arguments);
}

/**
 * @return {[type]}
 */
function connection (ws) {

  ws.on('message',message.bind(null,ws));
  ws.on('close',close);
}

wss.on('connection',connection);
