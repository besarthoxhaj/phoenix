'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import TabHistory from '../components/tabHistory.js';

import * as HistoryActions from '../actions/history.js';

class TabHistoryContainer extends Component {
  render(){
    return (
      <TabHistory {...this.props} />
    );
  }
}

TabHistoryContainer.propTypes = {
  selectedTab: PropTypes.string
};

const mapStateToProps = state => state.history

export default connect(mapStateToProps, HistoryActions)(TabHistoryContainer);
