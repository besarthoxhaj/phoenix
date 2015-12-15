'use strict';

import { combineReducers } from 'redux';
import { reducer as store } from './store.js';

console.log(store);

const rootReducer = combineReducers({
  store,
});

export default rootReducer;
