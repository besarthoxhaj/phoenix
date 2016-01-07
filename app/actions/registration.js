'use strict';

import { CHANGE_REGISTRATION_FIELD, CHANGE_REGISTRATION_PAGE } from '../action_types.js';

const schema = {
  'name': {validator: checkString , optional: false}
}

export function validateInput(page, fieldName) {
  return (dispatch) => {
    const { page: { fieldName: fieldObj } } = getState();
    const validated = schema[fieldName].optional ? true : schema[fieldName].validator(fieldObj.value)
    return dispatch(changeValidationState(fieldName, validated))
  }
}

function changeValidationState(page, fieldName, validated) {
  return { type: types.CHANGE_VALIDATION_STATE, page, fieldName, validated }
}

export function changeInput(page, fieldName, value){
  return { type: types.CHANGE_REGISTRATION_FIELD, page, fieldName, value}
}

export function changeRegistrationPage(page){
  return { type: types.CHANGE_REGISTRATION_PAGE, page }
}

export function submitForm(page){
  return (dispatch, getState) => {
    const { page } = getState();
    const allInputsValidated = Object.keys(inputs).every((input) => input.validated );

    return { type: types.SUBMIT_FORM, allInputsValidated }
  }

}
