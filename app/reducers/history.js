'use strict';

import { CHANGE_SELECTED_TAB } from '../action_types.js';

export const intitialState = {
  selectedTab: 'INBOX',
};

export default function (state = intitialState, action) {

  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.selectedTab
      };
    default:
      return state;
  }
}
