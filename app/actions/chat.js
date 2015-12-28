'use strict';

const ws = new WebSocket('http://localhost:9009');

import * as types from '../action_types.js';

export const open = () => {
  return { type: types.CHAT_OPEN };
};

export const close = () => {
  return { type: types.CHAT_CLOSE };
};

export const error = () => {
  return { type: types.CHAT_ERROR };
};

export const send = message => {
  return { type: types.SEND_MESSAGE, message: message };
};

export const receive = message => {
  return { type: types.RECEIVE_MESSAGE, message: message };
};

export const updateInput = text => {
  return { type: types.CHAT_UPDATE_INPUT, text: text };
};

// ===================================================================================

export const dispatchOpen = () => {
  return (dispatch, getState) => {
    dispatch(open());
  };
};

export const dispatchClose = () => {
  return (dispatch, getState) => {
    dispatch(close());
  };
};

export const dispatchError = () => {
  return (dispatch, getState) => {
    dispatch(error());
  };
};

export const dispatchReceive = message => {
  return (dispatch, getState) => {
    dispatch(receive(message));
  };
};

export const dispatchSend = () => {
  return (dispatch, getState) => {
    const message = getState().chat.input;
    ws.send(message);
    dispatch(send(message));
  };
};

// ===================================================================================

ws.onopen = e => dispatchOpen(e);

ws.onmessage = e => {
  dispatchReceive(e.data);
}

ws.onerror = e => dispatchError(e);

ws.onclose = e => dispatchClose(e);
