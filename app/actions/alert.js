'use strict';

import * as types from '../action_types.js';

export const showAlert = (title, message, buttons = []) => {
  return {type: types.SHOW_ALERT, title, message, buttons};
}

export const reset = () => {
  return { type: types.RESET_ALERT, isVisible: false };
}

export const show = (title, message, buttons) => dispatch => {

  // make sure the alert has a
  // redux button
  if (!buttons) {
    buttons = [{
      text: 'Ok',
      onPress: () => {
        dispatch(reset());
      }
    }];
  }

  setTimeout(() => {
    dispatch(showAlert(title, message, buttons));
  },0);
}

export const testAlert = () => {
  return (dispatch, getState) => {
    dispatch(show('Test','Hello, world!', [{
      text: 'Agree',
      style: 'destructive',
      onPress: () => {
        dispatch(reset());
      }
    },{
      text: 'Cancel',
      style: 'cancel',
      onPress: () => {
        dispatch(reset());
      }
    }]));
  }
}
