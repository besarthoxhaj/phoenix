'use strict';

import * as types from '../action_types.js';
import * as modal from './modal.js';
import * as alert from './alert.js';
import * as router from './router';

export const updateInput = (field, value) => {
  return { type: types.LOGIN_UPDATE_INPUT, field, value };
};

export const reset = () => {
  return { type: types.LOGIN_RESET_INPUT };
}

export const setEmail = email => {
  return { type: types.LOG_IN, email };
}

export const submit = () => {
  return (dispatch, getState) => {
    dispatch(modal.show('Wait...'));
    const email = getState().login.email;
    const message = 'Email not found: ' + email;
    setTimeout(() => {
      dispatch(modal.reset());
      dispatch(alert.show('Error', message, [{
        text: 'Ok',
        onPress: () => {
          dispatch(alert.reset());
          dispatch(alert.show('Bonus', '...for this time it\'s ok ;)', [{
            text: 'I\'m lucky!',
            onPress: () => {
              dispatch(setEmail(email));
              dispatch(reset());
              dispatch(router.navigateTo({name:'home'}));
              dispatch(alert.reset());
            }
          }]));
        }
      }]));
    }, 1000);
  };
};
