'use strict';

import * as types from '../action_types.js';

export function setConnectionStatus(status){
  console.log("STATUS", status)
  return { type: types.SET_CONNECTION_STATUS, status }
}
