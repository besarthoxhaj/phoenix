'use strict';

import {
  SHOW_MODAL,
  RESET_MODAL
} from '../action_types.js';

export const intitialState = {
  visible: false,
  text: '',
};

export const reducer = (state = intitialState, action) => {

  switch (action.type) {
    case SHOW_MODAL:
      return {
        visible: true,
        text: action.text,
      }
    case RESET_MODAL:
      return {
        visible: false,
        text: '',
      }
    default:
      return state
  }
}
