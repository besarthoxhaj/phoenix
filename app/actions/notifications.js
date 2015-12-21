/**
*
* NOTIFICATIONS actions
* use to set state to show and dismiss internal alerts and register device token
*
**/

// action should save the device token in the the database and call sync to update the store reducer
export function registerDeviceToken(token) {}

// action should set state in the ui reducer to show an alert with the notification data 
export function onReceiveNotification(appState, notification) {
  // use appState to check if the user has entered the app from the background (appState === 'background')
  // i.e. by swiping a push notification
  // may want to redirect the user to a different route instead of home by dispatching navigateTo

  return { type: types.NEW_PUSH_NOTIFICATION, notification: notification._data }
}
