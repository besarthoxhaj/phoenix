'use strict';

import * as types from '../action_types.js';

export function changeSelectedTab(selectedTab){
  return { type: types.CHANGE_SELECTED_TAB, selectedTab}
}
