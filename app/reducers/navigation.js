'use strict';

import { findIndex, propEq } from 'ramda';
import {
  CHANGE_ROUTE,
  GO_BACK,
  SET_INITIAL_ROUTE,
  RESTART,
  RESTART_NAVIGATION,
} from '../action_types.js';

const routes = [
  'Home',
  'Login',
  'Profile',
  'Modal/Show',
];

const initialRouteStack = routes.map((name, index) => {return {name, index}});

const initialRoute = { name: 'Home', index: 0 };

export const initialState = {
  route   : initialRoute,
  history : [initialRoute],
  stack   : initialRouteStack
};

export default (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_ROUTE:
      return {
        route: action.newRoute,
        stack: action.newRouteStack,
        history: action.newHistory
      };
    case GO_BACK:
      return {
        ...state,
      };
    case SET_INITIAL_ROUTE: {
      const index = findIndex(propEq('name', action.routeName))(state.stack);
      const newRoute = { name: action.routeName, index };
      return {
        ...state,
        route: newRoute,
        history: [newRoute]
      }
    }
    case RESTART_NAVIGATION:
      return {
        ...initialState
      };
    default:
      return {
        ...initialState
      };
  }
}
