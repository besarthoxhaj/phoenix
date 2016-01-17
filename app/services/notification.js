'use strict';

import * as alert from '../actions/alert.js';
import * as notification from '../actions/notifications.js';
import * as router from '../actions/router.js';

import { PushNotificationIOS, AppStateIOS } from 'react-native';

const service = {
  initialise: (state,dispatch) => {
    const registerListener = service.onRegister.bind(service,state,dispatch);
    const notificationListener = service.onNotification.bind(service,state,dispatch);
    PushNotificationIOS.addEventListener('register', registerListener);
    PushNotificationIOS.addEventListener('notification', notificationListener);

    // 
    const initalNotification = PushNotificationIOS.popInitialNotification();
    if (initalNotification) {
      service.onPopInitialNotification(state,dispatch,initalNotification);
    }

    PushNotificationIOS.requestPermissions();
  },
  onRegister: (state,dispatch,token) => {
    console.log('token',token);
  },
  onNotification: (state,dispatch,notification) => {
    if (AppStateIOS.currentState === 'active') {
      dispatch(alert.show('Notification', '...while app active'));
    } else {
      dispatch(router.navigateTo({name:'profile'}));
    }
  },
  onPopInitialNotification: (state,dispatch,notification) => {
    setTimeout(() => {
      dispatch(router.navigateTo({name:'history'}));
    }, 1000);
  },
  onStateUpdate: (state, dispatch) => {

  }
}

export default service;
