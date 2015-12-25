'use strict';

import * as types from '../action_types.js';

export const showModal = text => {
  return {
    type: types.SHOW_MODAL,
    text: text
  };
}

export const resetModal = () => {
  return { type: types.RESET_MODAL };
}

/**
 * Opens modal and closes it after 2 seconds
 */
export const testModal = () => {
  return (dispatch, getState) => {
    dispatch(showModal('Wait...'));
    setTimeout(() => {
      dispatch(resetModal());
    }, 1000)
  }
}
