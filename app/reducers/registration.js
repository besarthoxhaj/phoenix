'use strict';

import { CHANGE_REGISTRATION_FIELD, CHANGE_REGISTRATION_PAGE } from '../action_types.js';

const initialState = {
  page1: {
    name: {value: '', validated: false},
    email: {value: '', validated: false}
  },
  page2: {
    username: {value: '', validated: false},
    password: {value: '', validated: false}
  }
  currentPage: 'page1'
}

export default function reducer (state = initialState, action) {

  switch (action.type) {
    case CHANGE_REGISTRATION_FIELD:
      return {
        ...state
        [action.page]: {
          ...state[action.page],
          [action.field]: { value: action.value, validated: action.validated }
        }
      };
    case CHANGE_REGISTRATION_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state;
  }
}
