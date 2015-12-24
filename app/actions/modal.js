'use strict';

import * as types from '../action_types.js';

export const showModal = (modal) => {
  return { type: types.SHOW_MODAL, modal: modal };
}

export const clearModal = () => {
  return { type: types.CLEAR_MODAL };
}
