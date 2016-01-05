'use strict';

import * as types from '../action_types.js';
import { navigateTo } from './router.js';
import { API_URL } from '../config.js';

/**
*
* NOTIFICATIONS actions
* use to set state to show and dismiss internal alerts and register device token
*
**/
export const registerDeviceToken = device_token => {
  return { type: types.REGISTER_DEVICE_TOKEN, device_token };
};

// Action should save the device token in the the database and call sync to update the store reducer
export const saveDeviceToken = device_token => {
  return dispatch => {
    const req = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ device_token })
    };
    fetch( API_URL + '/push', req)
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
    console.log('notification', notification);
    console.log('appState', appState);
    dispatch(navigateTo({name:notification._data.type}));
  };
};
