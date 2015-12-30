'use strict';

import {
  START,
  REGISTER_DEVICE_TOKEN,
} from '../action_types.js';

export const initialState = {
  text: 'Click here',
  notifications: [],
  device_token: '',
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case START:
      return {
        text: 'Hello, world!',
      };
    case REGISTER_DEVICE_TOKEN:
      return {
        ...state,
        device_token: action.device_token,
      }
    default:
      return state;
  }
}
