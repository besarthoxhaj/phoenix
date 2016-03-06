'use strict';

var ws = new WebSocket('ws://localhost:9009');

ws.onopen = () => {
  // connection opened
  ws.send('something');
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};

export default {
  initialise: (getState, actionCreatorBinder) => {

  },
  onStateUpdate: () => {

  }
};
