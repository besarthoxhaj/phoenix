'use strict';

import {
  SHOW_ALERT,
  RESET_ALERT,
} from '../action_types.js';

export const intitialState = {
  isVisible: false,
  title: '',
  message: '',
  buttons: []
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        isVisible: true,
        title: action.title,
        message: action.message,
        buttons: action.buttons,
      };
    case RESET_ALERT:
      return intitialState;
    default:
      return state;
  }
}
