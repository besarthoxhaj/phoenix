'use strict';

import * as types from '../action_types.js';


export function changeSelectedTab(selectedTab){
  return { type: types.CHANGE_SELECTED_TAB, selectedTab }
}

// function to be called in refreshable list view
export function loadData(selectedTab, cb){
  return (dispatch, getState) => {
    const { history } = getState();
    
    // mocking async call to fetch data for the selectedTab
    setTimeout(() => {
      const newData  = ["Added New Data"].concat(history[selectedTab])
      cb(); //when the callback is called, the refreshing view is dismissed
      return dispatch(dataLoaded(selectedTab, newData));
    }, 500);
  }
}

function dataLoaded(tabIndex, data){
  return { type: types.DATA_LOADED, tabIndex, data }
}
