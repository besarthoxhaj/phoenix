'use strict';

import { AppStateIOS } from 'react-native';
import * as SplashActions from '../actions/splash.js';

export default {
  initialise: (actionCreatorBinder) => {

    // const { changeAppState } = actionCreatorBinder(SplashActions);
    // changeAppState(AppStateIOS.currentState)
    // AppStateIOS.addEventListener('change', changeAppState);
  },
  onStateUpdate: () => {}
}
