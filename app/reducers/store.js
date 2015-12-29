'use strict';

import {
  REHYDRATE_COMPLETE,
  REHYDRATE,
} from 'redux-persist/constants';
import {
  LOG_IN,
  LOG_OUT,
  RESET_STORE,
} from '../action_types.js';

export const initialState = {
  isLoggedIn: false,
  user: {  
    pin: '2222',
    email: '',
  }
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
    default:
      return {
        ...state,
      };
  }
}
