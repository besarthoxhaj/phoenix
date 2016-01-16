'use strict';

import { AlertIOS } from 'react-native';

export default {
  initialise: (state, actionCreatorBinder) => {},
  onStateUpdate: (state) => {

    if (state.alert.isVisible) {
      AlertIOS.alert(
        state.alert.title,
        state.alert.message,
        state.alert.buttons
      );
    }
  }
}
