'use strict';

import { combineReducers } from 'redux';
import store from './store.js';
import router from './router.js';
import login from './login.js';
import alert from './alert.js';
import modal from './modal.js';
import chat from './chat.js';
import deck from './deck.js';
import ui   from './ui.js';
import history from './history.js';

const rootReducer = combineReducers({
  store,
  router,
  alert,
  modal,
  login,
  chat,
  deck,
  ui,
  history
});

export default rootReducer;
