'use strict';

import { combineReducers } from 'redux';
import { reducer as store } from './store.js';
import { reducer as navigation } from './navigation.js';

const rootReducer = combineReducers({
  store,
  navigation,
});

export default rootReducer;
