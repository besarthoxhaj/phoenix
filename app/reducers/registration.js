'use strict';

import {
  CHANGE_REGISTRATION_FIELD,
  VALIDATE_REGISTRATION_FIELD,
  CHANGE_REGISTRATION_PAGE,
  SUBMIT_PAGE,
  RESET_REGISTRATION
} from '../action_types.js';

import { numberPages, pages, initialState } from '../registration_schema.js';

export default function reducer (state = initialState, action) {
  const {
    type,
    field,
    value,
    validated,
    direction
  }                     = action;
  const { index, page } = state

  switch (type) {
    case VALIDATE_REGISTRATION_FIELD:
      return {
        ...state,
        [page]: {
          ...state[page],
          [field]: { ...state[page][field], validated }
        }
      };
    case CHANGE_REGISTRATION_FIELD:
      return {
        ...state,
        [page]: {
          ...state[page],
          [field]: { ...state[page][field], value }
        }
      };
    case CHANGE_REGISTRATION_PAGE:
      const newIndex = index + direction === 'forward' ? 1 : -1

      return {
        ...state,
        currentIndex: newIndex,
        page:         pages[newIndex],
        buttonText:   newIndex === numberPages - 1 ? 'Continue' : 'Register'
      }
    default:
      return state;
    case RESET_REGISTRATION:
      return initialState;
  }
}
