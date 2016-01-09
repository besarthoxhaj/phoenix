'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import TabHistory from '../components/history.js';
// actions
import * as HistoryActions from '../actions/history.js';

class TabHistoryContainer extends Component {
  render(){
    return (
      <TabHistory {...this.props} />
    );
  }
}

TabHistoryContainer.propTypes = {
  selectedTab:       PropTypes.string,
  data:              PropTypes.array,
  loadData:          PropTypes.func,
  changeSelectedTab: PropTypes.func
};

function mapStateToProps(state) {

  const { history } = state;
  const selectedTab = history.selectedTab;
  const data        = history[selectedTab]; // only feed the data for the selected tab to the history component 

  return {
    selectedTab,
    data
  }
}

export default connect(mapStateToProps, HistoryActions)(TabHistoryContainer);
