'use strict';

import {
  START
} from '../action_types.js';

export const initialState = {
  text: 'Click here'
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case START:
      return {
        text: 'Hello, world!',
      };
    default:
      return state;
  }
}
