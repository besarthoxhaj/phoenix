import * as types from '../action_types.js';
import { navigateTo } from './navigation.js';
/**
*
* NOTIFICATIONS actions
* use to set state to show and dismiss internal alerts and register device token
*
**/

// Action should save the device token in the the database and call sync to update the store reducer
export function registerDeviceToken(token) {
  return { type: types.REGISTER_DEVICE_TOKEN, token }
}


/**
* use appState to check if the user has entered the app from the background i.e. by swiping a push notification
* can redirect the user to a different route instead of home by dispatching navigateTo
*
* if the app is active user is not re routed, dispatch sync action 
**/

export function onReceiveNotification(appState, notification) {

  return dispatch => {
    if (appState === 'background') { // entering the app from a push notification navigate to a page
      return dispatch(navigateTo({name:'Home'}));
    } else { // if in app then don't change the page, just dispatch an action
      return { type: types.NEW_PUSH_NOTIFICATION, notification: notification._data }
    }
  }

}
