'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import Home from '../components/home.js';
import * as NavigationActions from '../actions/router.js';
import * as NotificationsActions from '../actions/notifications.js';
import * as AlertActions from '../actions/alert.js';
import * as ModalActions from '../actions/modal.js';
import * as ActionSheetActions from '../actions/action_sheet.js';

const actionCreators = {
  ...NavigationActions,
  ...NotificationsActions,
  ...AlertActions,
  ...ModalActions,
  ...ActionSheetActions,
}

class HomeContainer extends Component {
  render () {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(HomeContainer);
