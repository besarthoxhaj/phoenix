'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers/index.js';

const finalCreateStore = applyMiddleware(thunk,createLogger())(createStore);

export default () => {

  const store = finalCreateStore(reducer);

  return store;
};
