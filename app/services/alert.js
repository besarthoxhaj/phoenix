'use strict';

import { AlertIOS } from 'react-native';

export default {
  initialise:    (state, actionCreatorBinder) => {},
  onStateUpdate: (state) => {
      const { alert : {
      isVisible,
      title,
      message,
      buttons,
    } }                  = state;

    if (isVisible) {
      AlertIOS.alert(
        title,
        message,
        buttons
      );
    }
  }
}
