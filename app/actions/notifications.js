'use strict';

import * as types from '../action_types.js';
import { navigateTo } from './router.js';
import * as alert from './alert.js';
/**
*
* NOTIFICATIONS actions
* use to set state to show and dismiss internal alerts and register device token
*
**/

export const registerDeviceToken = device_token => {
  return { type: types.REGISTER_DEVICE_TOKEN, device_token };
};

export const presentInternalAlert = (message, type) => dispatch => {

  dispatch(alert.show('Notification',message));
};

// Action should save the device token in the the database and call sync to update the store reducer
export const saveDeviceToken = device_token => {
  return dispatch => {
    const req = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ device_token })
    };

    fetch('http://192.168.1.5:9009' + '/push', req)
    .then(response => response.json())
    .then(json => {
      dispatch(registerDeviceToken(device_token));
    })
    .catch(err => console.log('err',err));
  };
};

/**
* use appState to check if the user has entered the app from the background i.e. by swiping a push notification
* can redirect the user to a different route instead of home by dispatching navigateTo
*
* if the app is active user is not re routed, dispatch sync action
**/
export const onReceiveNotification = (appState, notification) => {
  return dispatch => {

    // entering the app from a push notification navigate to a page
    // if in app then don't change the page, just dispatch an action
    if (appState === 'background') {
      return dispatch(navigateTo({name:'Home'}));
    } else {
      return { type: types.NEW_PUSH_NOTIFICATION, notification: notification._data }
    }
  };
};
