'use strict';

import {
  CHANGE_ROUTE,
  GO_BACK,
  RESTART_NAVIGATION,
} from '../action_types.js';

const initialRoute = { name: 'home' };

export const initialState = {
  route: initialRoute,
  history: [initialRoute]
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      const { route, history } = state;
      if (action.newRoute.name !== route.name) {
        return {
          route: action.newRoute,
          history: [...history, action.newRoute]
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
    case RESTART_NAVIGATION:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
