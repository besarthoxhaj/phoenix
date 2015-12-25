'use strict';

import * as types from '../action_types.js';

export const showAlert = (title, message, buttons = []) => {
  return {
    type: types.SHOW_ALERT,
    title,
    message,
    buttons
  };
}

export const resetAlert = () => {
  return { type: types.RESET_ALERT, isVisible: false };
}

export const testAlert = () => {
  return (dispatch, getState) => {
    dispatch(showAlert('Test','Hello, world!', [{
      text: 'Agree',
      style: 'destructive',
      onPress: () => {
        dispatch(resetAlert());
        console.log('Agree');

      }
    },{
      text: 'Cancel',
      style: 'cancel',
      onPress: () => {
        dispatch(resetAlert());
        console.log('Cancel');
      }
    }]));
  }
}
