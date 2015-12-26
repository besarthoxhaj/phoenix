'use strict';

import { combineReducers } from 'redux';
import store from './store.js';
import router from './router.js';
import login from './login.js';
import alert from './alert.js';
import modal from './modal.js';

const rootReducer = combineReducers({
  store,
  router,
  alert,
  modal,
  login,
});

export default rootReducer;
