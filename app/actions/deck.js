import fetch from 'isomorphic-fetch';

import * as types from '../action_types.js';

export function returnDeck () {
  return { type: types.RETURN_DECK }
}

export function sliceTopCard () {
  return { type: types.NEXT_CARD };
}

export function bounceBack () {
  return { type: types.BOUNCE_BACK };
}

export function noBounceBack () {
  return { type: types.NO_BOUNCE_BACK };
}
