'use strict';

import * as alert from '../actions/alert.js';

import { PushNotificationIOS } from 'react-native';

const service = {
  initialise: (state,dispatch) => {
    const registerListener = service.onRegister.bind(service,state,dispatch);
    const notificationListener = service.onNotification.bind(service,state,dispatch);
    PushNotificationIOS.addEventListener('register', registerListener);
    PushNotificationIOS.addEventListener('notification', notificationListener);
    PushNotificationIOS.requestPermissions();
  },
  onRegister: (state,dispatch,token) => {
    console.log('token',token);
  },
  onNotification: (state,dispatch,notification) => {
    dispatch(alert.show('Notification', 'From Nikki'));
  },
  onStateUpdate: (state, dispatch) => {

  }
}

export default service;
