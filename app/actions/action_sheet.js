'use strict';

import * as types from '../action_types.js';

import { navigateTo } from './router.js';
import { logOutAndClearStorage } from './login.js';

export const showActionSheet = (options) => {
  return {
    type: types.SHOW_ACTION_SHEET,
    options
  };
};

export const resetActionSheet = () => {
  return { type: types.RESET_ACTION_SHEET };
};

export const showLogOutActionSheet = () => (dispatch) => {
  return dispatch(showActionSheet({
    title: 'Are you sure you want to log out?',
    options: ['Log Out', 'Cancel'],
    destructiveButtonIndex: 0,
    callback: (buttonIndex) => {
      if (buttonIndex === 0) {
        dispatch(resetActionSheet());
        dispatch(navigateTo({name: 'login'}));
      } else {
        dispatch(resetActionSheet());
      }
    }
  }));
};
