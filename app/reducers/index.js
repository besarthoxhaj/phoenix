'use strict';

import { combineReducers } from 'redux';
import { reducer as store } from './store.js';
import { reducer as router } from './router.js';
import { reducer as alert } from './alert.js';
import { reducer as modal } from './modal.js';

const rootReducer = combineReducers({
  store,
  router,
  alert,
  modal,
});

export default rootReducer;
