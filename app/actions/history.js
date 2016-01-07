'use strict';

import * as types from '../action_types.js';

export function changeSelectedTab(selectedTab){
  return { type: types.CHANGE_SELECTED_TAB, selectedTab}
}

// function to be called in refreshable list view
export function loadData(selectedTab, cb){
  // mocking async call to fetch data for the selectedTab
  setTimeout(cb, 500); //when the callback is called, the refreshing view is dismissed
  return { type: types.DATA_LOADED } // action is not in any of the reducers at the moment...
}
