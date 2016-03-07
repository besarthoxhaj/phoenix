'use strict';

import * as types from '../action_types.js';
import fetch from 'isomorphic-fetch';
import * as router from './router.js';
import * as modal from './modal.js';
import * as alert from './alert.js';
import { API_URL } from '../config.js';

export const updateInput = (field, value) => ({type:types.LOGIN_UPDATE_INPUT,field,value});
export const reset = () => ({type:types.LOGIN_RESET_INPUT});
export const setEmail = email => ({type:types.LOG_IN,email});
const loginSuccess = () => ({type:types.LOGIN_SUCCESS});
const loginFail = (error) => ({type:types.LOGIN_FAIL});

export const login = (username, password) => (dispatch, getState) => {

};

export const submit = () => (dispatch, getState) => {

};
