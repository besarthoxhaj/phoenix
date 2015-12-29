'use strict';

import { findIndex, propEq } from 'ramda';
import check from '../utils/router.js';

import {
  CHANGE_ROUTE,
  GO_BACK,
  SET_INITIAL_ROUTE,
  RESTART,
  RESET_NAVIGATION,
} from '../action_types.js';

import {
  REHYDRATE_COMPLETE,
  REHYDRATE,
} from 'redux-persist/constants';

const routes = [
  '_splash',
  'login',
  'pin',
  'home',
  'modal/show',
  'profile',
  'chat'
];

const initialRouteStack = routes.map((name, index) => {return {name, index}});

const initialRoute = { name: '_splash', index: 0 };

export const initialState = {
  route: initialRoute,
  history: [initialRoute],
  stack: initialRouteStack
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    /**
     * Some recursion going on here! OMG!
     */
    case REHYDRATE_COMPLETE:
      const redirectRoute = check({name:'home'}, action._store.getState());
      return reducer(state, {
        type: 'CHANGE_ROUTE',
        newRoute: {name: redirectRoute}
      });
    case CHANGE_ROUTE:
      const { route, history, stack } = state;
      if (action.newRoute.name !== route.name) {
        let newRoute;
        let newRouteStack;
        let newHistory;
        const index = findIndex(propEq('name', action.newRoute.name))(stack);
        // if newRoute isn't in the stack, add it.
        if (index < 0) {
          newRoute = {...action.newRoute, index: stack.length};
          newRouteStack = [...stack, newRoute];
        } else {
          newRoute = {...action.newRoute, index};
          newRouteStack = [...stack];
        }
        // if returning to a previous page, remove route from history (i.e. pop)
        if (history.length >= 2 && action.newRoute.name === history[history.length - 2].name) {
          newHistory = history.slice(0, -1);
        } else {
          newHistory = [...history, newRoute];
        }
        return {
          route: newRoute,
          stack: newRouteStack,
          history: newHistory
        };
      } else {
        return {
          ...state
        };
      }
    case GO_BACK:
      let newRoute = state.history[state.history.length - 2];
      let newHistory = state.history.slice(0, -1);
      return {
        ...state,
        route: newRoute,
        history: newHistory,
      };
    case SET_INITIAL_ROUTE: {
      const index = findIndex(propEq('name', action.routeName))(state.stack);
      const newRoute = { name: action.routeName, index };
      return {
        ...state,
        route: newRoute,
        history: [newRoute]
      };
    }
    case RESET_NAVIGATION:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
