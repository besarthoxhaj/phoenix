'use strict';

import * as types from '../action_types.js';
import navigateTo from './router.js';

import { schemaValidation, numberPages } from '../registration_schema.js'

export function validateInput (field) {
  return (dispatch, getState) => {
    const { registration } = getState();
    const { page }         = registration;
    const value            = registration[page][field].value;
    console.log(value, registration, 'valuevalue');
    schemaValidation[page][field](value, (validated) => dispatch(changeValidationState(field, validated)), registration)
  }
}

function changeValidationState (field, validated) {
  return { type: types.VALIDATE_REGISTRATION_FIELD, field, validated }
}

export function changeInput (field, value) {
  return { type: types.CHANGE_REGISTRATION_FIELD, field, value}
}

export function submitPage () {
  return (dispatch, getState) => {
    const { registration }   = getState();
    const { page }           = registration;
    const inputs             = registration[page];
    const allInputsValidated = Object.keys(inputs).every(input => input.validated );

    if (allInputsValidated) {
      dispatch( registration.index === numberPages -1 ? submitForm() :changeRegistrationPage('forward'));
    }
  }
}

export function back () {
  return (dispatch, getState) => {
    const { registration: {index} } = getState();

    dispatch( index === 0 ? backToLogin(): changeRegistrationPage('back'));
  }
}

function backToLogin () {
  return dispatch => {
    dispatch(navigateTo('login'));
    dispatch(resetRegistration());
  };
}

function submitForm () {
  return dispatch => {
    dispatch(navigateTo('home'));
    dispatch(resetRegistration());
  };
}

function resetRegistration () {
  return { type: types.RESET_REGISTRATION };
}
