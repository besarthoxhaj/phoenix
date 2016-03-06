'use strict';

import { AppStateIOS, PushNotificationIOS } from 'react-native';
import * as NotificationActions from '../actions/notifications.js';

export default {

  initialise: actionCreatorBinder => {

    // const {
    //   saveDeviceToken,
    //   onReceiveNotification,
    //   popInitialNotification,
    // } = actionCreatorBinder(NotificationActions);

    // let callOnce = false;

    // PushNotificationIOS.addEventListener('register', token => {

    //   // for some reason sometimes 'register' event get called twice
    //   if (!callOnce) {
    //     callOnce = !callOnce;
    //     saveDeviceToken(token);
    //   }
    // });

    // PushNotificationIOS.addEventListener('notification', onReceiveNotification.bind(undefined,AppStateIOS));

    // const initalNotification = PushNotificationIOS.popInitialNotification();

    // if (initalNotification) {
    //   popInitialNotification(initalNotification);
    // }

    // PushNotificationIOS.checkPermissions(permissions => {
    //   PushNotificationIOS.requestPermissions();
    // });
  },
  onStateUpdate: (state, actionCreatorBinder) => {

    // PushNotificationIOS.setApplicationIconBadgeNumber(state.store.notificationBadge);
  }
}
