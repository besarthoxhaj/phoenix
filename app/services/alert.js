'use strict';

import { AlertIOS } from 'react-native';

export default function (state) {
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
