'use strict';

import * as types from '../action_types.js';

export function setConnectionStatus(status){
  return { type: types.SET_CONNECTION_STATUS, status }
}
