'use strict';

import * as types from '../action_types.js';

export const show = text => ({type: types.SHOW_MODAL,text});
export const reset = () => ({type:types.RESET_MODAL});

export const testModal = () => {
  return (dispatch, getState) => {
    dispatch(show('Wait...'));
    setTimeout(() => {
      dispatch(reset());
    }, 1000)
  };
};
