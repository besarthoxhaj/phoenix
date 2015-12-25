'use strict';

import { combineReducers }    from 'redux';
import store                  from './store.js';
import navigation             from './navigation.js';
import alert                  from './alert.js';
import modal                  from './modal.js';

const rootReducer = combineReducers({
  store,
  navigation,
  alert,
  modal,
});

export default rootReducer;
