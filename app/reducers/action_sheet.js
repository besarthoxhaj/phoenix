'use strict';

import {
  SHOW_ACTION_SHEET,
  RESET_ACTION_SHEET
} from '../action_types.js';

export const intitialState = {
  isVisible: false,
  title: '',
  buttons: [],
  destructiveButtonIndex: 0,
  callback: () => {},
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case SHOW_ACTION_SHEET:
      return {
        isVisible: true,
        ...action.options,
      };
    case RESET_ACTION_SHEET:
      return {
        ...intitialState
      };
    default:
      return {
        ...state,
      };
  }
}
