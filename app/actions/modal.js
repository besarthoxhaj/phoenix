'use strict';

import * as types from '../action_types.js';

export const show = text => {
  return {
    type: types.SHOW_MODAL,
    text: text
  };
};

export const reset = () => {
  return { type: types.RESET_MODAL };
};

/**
 * Opens modal and closes it after 2 seconds
 */
export const testModal = () => {
  return (dispatch, getState) => {
    dispatch(show('Wait...'));
    setTimeout(() => {
      dispatch(reset());
    }, 1000)
  };
};
