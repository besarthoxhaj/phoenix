'use strict';

import {
  LOGIN_UPDATE_INPUT,
  LOGIN_RESET_INPUT,
} from '../action_types.js';

export const intitialState = {
  email: '',
};

export default function (state = intitialState, action) {

  switch (action.type) {
    case LOGIN_UPDATE_INPUT:
      return {
        ...state,
        [action.field]: action.value
      };
    case LOGIN_RESET_INPUT:
      return {
        ...intitialState
      };
    default:
      return state;
  }
}
