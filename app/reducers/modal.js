'use strict';

import {
  SHOW_MODAL,
  RESET_MODAL,
} from '../action_types.js';

export const intitialState = {
  isVisible: false,
  text: '',
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isVisible: true,
        text: action.text,
      };
    case RESET_MODAL:
      return {
        isVisible: false,
        text: '',
      };
    default:
      return {
        ...state,
      };
  }
}
