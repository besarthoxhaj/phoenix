'use strict';

import { combineReducers } from 'redux';
import store from './store.js';
import router from './router.js';
import login from './login.js';
import alert from './alert.js';
import modal from './modal.js';
import chat from './chat.js';
<<<<<<< HEAD
import ui from './ui.js';
=======
import history from './history.js';
>>>>>>> 9990ce23f5e20ca6384c2a0cce7aca4bcf9fb155

const rootReducer = combineReducers({
  store,
  router,
  alert,
  modal,
  login,
  chat,
<<<<<<< HEAD
  ui
=======
  history
>>>>>>> 9990ce23f5e20ca6384c2a0cce7aca4bcf9fb155
});

export default rootReducer;
