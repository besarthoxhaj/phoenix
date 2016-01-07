'use strict';

import {
  CHAT_CLOSE,
  CHAT_OPEN,
  CHAT_ERROR,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  CHAT_UPDATE_INPUT,
} from '../action_types.js';

export const intitialState = {
  input: '',
  received: [],
  sent: [],
};

export default function (state = intitialState, action) {

  switch (action.type) {
    case CHAT_UPDATE_INPUT:
      return {
        ...state,
        input: action.text,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        sent: state.sent.concat(action.message),
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        received: state.received.concat(action.message),
      };
    default:
      return {
        ...state,
      };
  }
}
