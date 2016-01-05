'use strict';

import * as types      from '../action_types.js';
import { postReq }     from '../utils/create-request-v2.js'
import { sendRequest } from '../utils/request-wrapper.js'
import * as router from './router.js';
import * as modal from './modal.js';
import * as alert from './alert.js';
import { API_URL }     from '../config.js';

export const updateInput = (field, value) => {
  return { type: types.LOGIN_UPDATE_INPUT, field, value };
};

export const reset = () => {
  return { type: types.LOGIN_RESET_INPUT };
};

export const setEmail = email => {
  return { type: types.LOG_IN, email };
};

const loginSuccess = () => {
  return { type: types.LOGIN_SUCCESS };
};

const loginFail = (error) => {
  return { type: types.LOGIN_FAIL };
};

export const login = (username, password) => async (dispatch) => {
  const data      = { username: 'nikki', password: 'password'}
  const request   = () => postReq(API_URL +'/login', data); // returns a promise
  const onSuccess = json => {
    if (json.status === 'success') {
      dispatch(loginSuccess());
      dispatch(router.navigateTo({name:'Home'}))
    } else {
      dispatch(loginFail('Sorry password or username did not match'));
    }
  };
  const onError = (error, errorType) => {
    dispatch(loginFail('Sorry ' + errorType));
  };
  sendRequest({ request, onSuccess, onError })
};

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
              dispatch(alert.reset());
              dispatch(setEmail(email));
              dispatch(reset());
              dispatch(router.navigateTo({name:'home'}));
            }
          }]));
        }
      }]));
    }, 1000);
  };
};
