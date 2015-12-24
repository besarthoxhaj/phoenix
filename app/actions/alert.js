'use strict';

import * as types from '../action_types.js';

export const showAlert = () => {
  return { type: types.SHOW_ALERT, alert: 'test' };
}

export const clearAlert = () => {
  return { type: types.CLEAR_ALERT };
}
