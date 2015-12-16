'use strict';

import test from 'tape';
import {
  reducer,
  initialState
} from '../../app/reducers/navigation.js';

test('app:reducers:navigation -> inital state', t => {

  t.deepEquals(reducer(undefined, {}), initialState, 'default state when no action given');
  t.end();
});

test('app:reducers:navigation:CHANGE_ROUTE -> return right state', t => {

  t.end();
});
