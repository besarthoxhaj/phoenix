'use strict';

import { ALERT, CLEAR_ALERT } from '../action_types.js';

export const intitialState = null;

export const reducer = (state = intitialState, action) => {

  switch (action.type) {
    case ALERT:
      return action.alert;
    case CLEAR_ALERT:
      return null
    default:
      return state
  }
}
