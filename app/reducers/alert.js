'use strict';

import { SHOW_ALERT, CLEAR_ALERT } from '../action_types.js';

export const intitialState = null;

export default (state = intitialState, action) => {

  switch (action.type) {
    case SHOW_ALERT:
      return action.alert;
    case CLEAR_ALERT:
      return null
    default:
      return state
  }
}
