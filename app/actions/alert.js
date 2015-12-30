'use strict';

import * as types from '../action_types.js';

export const show = (title, message, buttons = []) => {
  return {
    type: types.SHOW_ALERT,
    title,
    message,
    buttons
  };
}

export const reset = () => {
  return { type: types.RESET_ALERT, isVisible: false };
}

export const testAlert = () => {
  return (dispatch, getState) => {
    dispatch(show('Test','Hello, world!', [{
      text: 'Agree',
      style: 'destructive',
      onPress: () => {
        dispatch(reset());
        console.log('Agree');
      }
    },{
      text: 'Cancel',
      style: 'cancel',
      onPress: () => {
        dispatch(reset());
        console.log('Cancel');
      }
    }]));
  }
}
