'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes } from 'react-native';
// components
import Home from '../components/home.js';
// actions
import * as NavigationActions from '../actions/router.js';
import * as NotificationsActions from '../actions/notifications.js';
import * as AlertActions from '../actions/alert.js';
import * as ModalActions from '../actions/modal.js';

const actionCreators = {
  ...NavigationActions,
  ...NotificationsActions,
  ...AlertActions,
  ...ModalActions,
}

class HomeContainer extends Component {
  render(){
    return (
      <Home {...this.props} />
    );
  }
}

HomeContainer.propTypes = {
  testAlert: PropTypes.func.isRequired,
  testModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, actionCreators)(HomeContainer);
