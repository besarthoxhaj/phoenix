import fetch from 'isomorphic-fetch';

import * as types from '../action_types.js';

function sliceTopCard () {
  return { type: types.NEXT_CARD };
};

export function nextCard () {
  return (dispatch, getState) => {
    return dispatch(sliceTopCard());
  }
};

export function swipeLeft () {
  console.log('swiped left')
};

export function swipeRight () {
  return (dispatch, getState) => {
    return dispatch(nextCard());
  }
};
