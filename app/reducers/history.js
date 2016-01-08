'use strict';

import { CHANGE_SELECTED_TAB, DATA_LOADED } from '../action_types.js';

export const intitialState = {
  selectedTab: 'tab1',
  tab1: ["New message from Jack", "New message from Izaak"],
  tab2: ["Email sent to Bes", "Email sent to Nikki"],
  tab3: ["Rubbish Message 1", "Rubbish Message 2"]
};

export default function (state = intitialState, action) {

  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.selectedTab,
      };
    case DATA_LOADED:
      return {
        ...state,
        [action.tabIndex]: action.data
      };
    default:
      return state;
  }
}
