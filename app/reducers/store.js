'use strict';

import {
  LOG_IN,
  LOG_OUT,
  RESET_STORE,
} from '../action_types.js';

export const initialState = {
  isLoggedIn: false,
  pin: '',
  name: '',
};

export default function (state = initialState, action) {

  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        name: action.name
      };
    case LOG_OUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
}
