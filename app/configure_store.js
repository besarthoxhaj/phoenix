'use strict';

// inspired by https://github.com/NeverGoStable/WellnessDiary/blob/master/store/configureStore.js

import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const passFullStoreMiddleware = store => dispatch => action => {
  action['_store'] = store;
  return dispatch(action);
}

import reducer from './reducers';

/**
 * thunk: for asynchronous dispatching
 * createLogger: to see how state changes on every action, see console
 * persist: for storing state into async storage and rehydrating when app opens up.
 *          You can limit what you store and what you hydrate by specifying a blacklist and logic in reducers respectively.
 *          You can see the full api on github: https://github.com/rt2zz/redux-persist
 */
const finalCreateStore = compose(
  applyMiddleware(thunk, createLogger(), passFullStoreMiddleware),
  autoRehydrate()
)(createStore);

// comment out blacklist if you want to preserve state in these reducers for development
// (note you will also want comment out the entry and login reducer)

export default () => {

  const store = finalCreateStore(reducer);

  persistStore(store, {
    storage: AsyncStorage,
    blacklist: [
      'home',
      'router',
      'login',
      'alert',
      'modal',
      'history'
    ]
  });

  return store;
}
