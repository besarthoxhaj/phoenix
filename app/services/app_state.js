'use strict';

import * as alert from '../actions/alert.js';

import { AppStateIOS } from 'react-native';

const service = {
  initialise: (state,dispatch) => {
    const stateChangeListener = service.onRegister.bind(service,state,dispatch);
    const memoryWarningListener = service.onMemoryWarning.bind(service,state,dispatch);
    AppStateIOS.addEventListener('change', stateChangeListener);
    AppStateIOS.addEventListener('memoryWarning', memoryWarningListener);
  },
  onStateChange: (state,dispatch,appState) => {
    console.log('token',appState);
  },
  onMemoryWarning: (state,dispatch,memoryWarning) => {
    console.log('memoryWarning',memoryWarning);
  },
  onStateUpdate: (state, dispatch) => {

  }
}

export default service;
