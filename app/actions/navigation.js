
/**
 * NAVIGATION ACTIONS
 * navigateTo function should be used for any transitions between any
 * routes in app/containers/Router.js
 */

'use strict';

import { findIndex, propEq } from 'ramda';
import * as types from '../action_types.js';

/**
 * Sets the new 'route', 'stack' and 'history' states in the navigator reducer
**/

const changeRouteAndStack = (newRoute, newRouteStack, newHistory) => {
  return { type: types.CHANGE_ROUTE, newRoute, newRouteStack, newHistory};
}

/**
 *  Changes the route state in the navigator reducer to the new page
 *  @param {Object} - route object with name property e.g. { name : 'Home '}
 *
 *  @return -> If the route is different from the current route,
 *  adds the route to the history, updates the route stack if the route is not
 *  already present and dispatches changeRouteAndStack action with newRoute, newStack and newHistory
 *
 *  If the route is the same as the current route, returns without dispatching an action.
 *
 *  Experimenting with a 'stackUpdated' state to mimic forceUpdate of navigator when a new route 
 *  is added to the stack -> doesn't work yet!
 *
 * Inspired by https://github.com/dnbrwstr/colorchat-app/blob/770f33a83d46304f20bc241ff6d37ed76ae8dc85/js/reducers/navigation.js
**/

export const navigateTo = (nextRoute) => {

  return (dispatch, getState) => {

    const { navigation: { route, history, stack }} = getState();

    // this should be done in the reducer, 'changeRouteAndStack'
    // should only return the new rotue
    if (nextRoute.name !== route.name) {
      const index = findIndex(propEq('name', nextRoute.name))(stack);

      let newRoute;
      let newRouteStack;
      let newHistory;

      // what does mean (index < 0)?
      if (index < 0) {
        newRoute      = {...nextRoute, index: stack.length};
        newRouteStack = [...stack, newRoute];
      } else {
        newRoute      = {...nextRoute, index};
        newRouteStack = [...stack];
      }

      //if returning to a previous page, remove route from history (i.e. pop)
      if (history.length >= 2 && nextRoute.name === history[history.length - 2].name) {
        newHistory = history.slice(0, -1);
      } else {
        newHistory = [...history, newRoute];
      }
      
      return dispatch(changeRouteAndStack(newRoute, newRouteStack, newHistory));
    }

    return;
  }
}
