'use strict';

import * as types from '../action_types.js';

export const showAlert = (alert) => {
  return { type: types.SHOW_ALERT, alert: alert };
}

export const clearAlert = () => {
  return { type: types.CLEAR_ALERT };
}
