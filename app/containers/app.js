'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, View, PushNotificationIOS, AppStateIOS } from 'react-native';
// containers
import Router from './router.js';
import Modals from './modal.js';
// actions
import * as NavigationActions from '../actions/router.js';
import * as PushNotificationActions from '../actions/notifications.js';
import * as LocationActions from '../actions/location.js';

const actionCreators = {
  ...NavigationActions,
  ...PushNotificationActions,
  ...LocationActions
};

class AppContainer extends Component {

  componentDidMount() {
    this.props.isGB(navigator);
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Router/>
        <Modals/>
      </View>
    );
  }
}

AppContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  registerDeviceToken: PropTypes.func,
  onReceiveNotification: PropTypes.func,
  unreadNotificationCount: PropTypes.number,
  requestPermissions: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    unreadNotificationCount: 1,
  };
}

export default connect(mapStateToProps, actionCreators)(AppContainer);
