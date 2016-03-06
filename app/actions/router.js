'use strict';

import * as types from '../action_types.js';

export const changeRoute = (newRoute) => ({type:types.CHANGE_ROUTE,newRoute});
export const goBack = () => ({type:types.GO_BACK});
export const navigateTo = (nextRoute) => (dispatch, getState) => {
  dispatch(changeRoute(nextRoute));
};
