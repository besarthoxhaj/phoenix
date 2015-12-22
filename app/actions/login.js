/**
*
* LOGIN actions
* testing out request wrapper functions
**/

import * as types      from '../action_types.js';
import { postReq }     from '../utils/create-request-v2.js'
import { sendRequest } from '../utils/request-wrapper.js'
import { navigateTo }  from './navigation.js';
import { API_URL }     from '../config.js';

export const login = (username, password) => async (dispatch) => {
  const data      = { username: 'nikki', password: 'password'}
  const request   = () => postReq(API_URL +'/login', data); // returns a promise
  const onSuccess = json => {
    if (json.status === 'success') {
      dispatch(loginSuccess());
      dispatch(navigateTo({name:'Home'}))
    } else {
      dispatch(loginFail('Sorry password or username did not match'));
    }
  }
  const onError = (error, errorType) => {
    dispatch(loginFail('Sorry ' + errorType));
  }
  sendRequest({ request, onSuccess, onError })
}


function loginSuccess() {
  return { type: types.LOGIN_SUCCESS }
}

function loginFail(error) {
  console.log("error", error)
  return { type: types.LOGIN_FAIL }
}
