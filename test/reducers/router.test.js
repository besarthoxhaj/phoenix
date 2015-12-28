'use strict';

import test from 'tape';
import reducer, { initialState } from '../../app/reducers/router.js';
import { CHANGE_ROUTE, SET_INITIAL_ROUTE, RESTART } from '../../app/action_types.js';

test('app:reducers:router -> inital state', t => {

  t.deepEquals(reducer(undefined, {}), initialState, 'default state');
  t.end();
});

test('app:reducers:router:CHANGE_ROUTE -> should return right state', t => {

  const newRoute = {name:'modal/show',index:3};
  const newHistory = [...initialState.history, newRoute];
  const newRouteStack = initialState.stack;

  const updatedRouteState = {
    route: newRoute,
    history: newHistory,
    stack: initialState.stack
  };

  const mockAction = {type:CHANGE_ROUTE, newRoute};
  const reducerState = reducer(initialState, mockAction);

  t.deepEquals(reducerState, updatedRouteState, 'got right state');
  t.end();
});
