'use strict';

import { findIndex, propEq } from 'ramda';
import * as types from '../action_types.js';

/**
 * Sets the new 'route', 'stack' and 'history' states in the navigator reducer
**/
export const changeRoute = (newRoute) => {
  return {
    type: types.CHANGE_ROUTE,
    newRoute
  };
}

export const goBack = () => {
  return { type: types.GO_BACK };
}

export const navigateTo = (nextRoute) => {

  return (dispatch, getState) => {

    dispatch(changeRoute(nextRoute));
  }
}
