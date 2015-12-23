'use strict';

import { AlertIOS } from 'react-native';
// actions
import * as AlertActions from '../actions/alert.js';

export default function (state, actionCreatorBinder) {
  const { clearAlert } = actionCreatorBinder(AlertActions)
  const { alert }      = state;
  let message          = 'hey';
  let subtitle         = null;
  let text             = 'OK';
  let onPress          = clearAlert;

  switch (alert) {
    case 'test':
      message = 'hello Jack';
      subtitle = '123';
      text = 'press me';
    break;
  }

  if (alert !== null) {
    AlertIOS.alert(
      message,
      subtitle,
      [{text, onPress}]
    )
  }
}
