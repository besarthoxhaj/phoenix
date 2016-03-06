'use strict';

import * as types from '../action_types.js';
import { navigateTo } from './router.js';
import * as alert from './alert.js';

export const registerDeviceToken = device_token => ({type:types.REGISTER_DEVICE_TOKEN,device_token});

export const presentInternalAlert = (message, type) => dispatch => {

  dispatch(alert.show('Notification',message));
};

export const saveDeviceToken = device_token => dispatch => {

  // const req = {
  //   method: 'POST',
  //   headers: { 'Content-type': 'application/json' },
  //   body: JSON.stringify({ device_token })
  // };

  // fetch('http://192.168.1.5:9009' + '/push', req)
  // .then(response => response.json())
  // .then(json => {
  //   dispatch(registerDeviceToken(device_token));
  // })
  // .catch(err => console.log('err',err));
};

export const onReceiveNotification = (appState, notification) => dispatch => {

  // if (appState === 'background') {
  //   return dispatch(navigateTo({name:'Home'}));
  // } else {
  //   return { type: types.NEW_PUSH_NOTIFICATION, notification: notification._data }
  // }
};
