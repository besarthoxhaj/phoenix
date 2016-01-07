'use strict';

import {
  REHYDRATE_COMPLETE,
  REHYDRATE,
} from 'redux-persist/constants';

import {
  START,
  LOG_IN,
  LOG_OUT,
  RESET_STORE,
  REGISTER_DEVICE_TOKEN,
  CORRECT_COUNTRY,
} from '../action_types.js';

export const initialState = {
  isLoggedIn: false,
  notifications: [],
  device_token: '',
  user: {
    pin: '2222',
    email: '',
  },
  correctCountry: true,
};

export default function (state = initialState, action) {

  switch (action.type) {
    case REHYDRATE:
      if (action.key === 'store') {
        return {
          isLoggedIn: false,
          user: {
            ...action.payload.user,
          }
        };
      } else {
        return {
          ...state,
        };
      }
    case LOG_IN:
      return {
        isLoggedIn: true,
        user: {
          ...state.user,
          email: action.email
        }
      };
    case LOG_OUT:
      return {
        ...initialState,
      };
    case REGISTER_DEVICE_TOKEN:
      return {
        ...state,
        device_token: action.device_token,
      }
    default:
      return {
        ...state,
      };
  }
}
