'use strict';

import { SET_CONNECTION_STATUS } from '../action_types.js';

export const initialState = {
  isConnected: true
}

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.status
      }
    default:
      return state;
  }
}
