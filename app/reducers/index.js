'use strict';

import { combineReducers }       from 'redux';
import { reducer as store }      from './store.js';
import { reducer as navigation } from './navigation.js';
import { reducer as alert }      from './alert.js';

const rootReducer = combineReducers({
  store,
  navigation,
  alert,
});

export default rootReducer;
