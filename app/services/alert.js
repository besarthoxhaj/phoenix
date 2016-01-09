'use strict';

import { AlertIOS } from 'react-native';
// actions
import * as AlertActions from '../actions/alert.js';

<<<<<<< HEAD
export default function (state) {

  const {
    alert: {
      isVisible,
      title,
      message,
      buttons,
    }
  } = state;

=======
export default function (state, actionCreatorBinder) {
  const { clearAlert } = actionCreatorBinder(AlertActions)
  const { alert : {
    isVisible,
    title,
    message,
    buttons,
  } }      = state;

>>>>>>> netinfo
  if (isVisible) {
    AlertIOS.alert(
      title,
      message,
      buttons
<<<<<<< HEAD
    );
=======
    )
>>>>>>> netinfo
  }
}
