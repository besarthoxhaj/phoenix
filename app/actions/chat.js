'use strict';

import * as types from '../action_types.js';

let ws;

export const updateInput = (text) => ({type:types.CHAT_UPDATE_INPUT,text});

export const openConnection = () => (dispatch,getState) => {

  ws = new WebSocket('ws://localhost:9009');

  ws.onopen = () => {
    console.log('connection opened!');
  };

  ws.onmessage = (e) => {
    console.log('receiveMessage',e.data);
  };

  ws.onerror = (e) => {
    console.log('error',e.message);
  };
};

export const closeConnection = () => (dispatch,getState) => {

  ws.close();

  ws.onclose = function () {
    console.log('connection closed!');
  };
};

export const sendMessage = () => (dispatch,getState) => {

  const { chat: { input } } = getState();

  ws.send(input);
}

export const receiveMessage = () => (dispatch,getState) => {

}
