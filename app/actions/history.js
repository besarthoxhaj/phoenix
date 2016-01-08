'use strict';

import * as types from '../action_types.js';

export function changeSelectedTab(selectedTab){
  return { type: types.CHANGE_SELECTED_TAB, selectedTab }
}

/**
* Function to be called when the refreshable list view is pulled down and released
* @param {Function} - cb - when the callback is called, the refreshing view is dismissed
*
*/

export function loadData(cb){
  return (dispatch, getState) => {
    const { history } = getState();
    const selectedTab = history.selectedTab
    
    let newData;
    switch(selectedTab){
      case 'tab1':
        newData = ["New Message"].concat(history[selectedTab]);
        break;
      case 'tab2':
        newData = ["Sent Message"].concat(history[selectedTab]);
        break;
      case 'tab3':
        newData = ["More Rubbish"].concat(history[selectedTab]);
    }

    // mocking async call to fetch data for the selectedTab
    setTimeout(() => {
      cb();
      return dispatch(dataLoaded(selectedTab, newData));
    }, 500);
  }
}

function dataLoaded(tabIndex, data){
  return { type: types.DATA_LOADED, tabIndex, data }
}
