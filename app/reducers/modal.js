'use strict';

import { SHOW_MODAL, CLEAR_MODAL } from '../action_types.js';

export const intitialState = null;

export default (state = intitialState, action) => {

  switch (action.type) {
    case SHOW_MODAL:
      return action.modal;
    case CLEAR_MODAL:
      return null;
    default:
      return state
  }
}
