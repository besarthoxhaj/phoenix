'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, View, PushNotificationIOS, AppStateIOS } from 'react-native';
// containers
import Router from './router.js';
import Alerts from './alerts.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class AppContainer extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    PushNotificationIOS.addEventListener('register', this.props.registerDeviceToken)
    PushNotificationIOS.addEventListener('notification', this.props.onReceiveNotification.bind(null, AppStateIOS.currentState))
    PushNotificationIOS.setApplicationIconBadgeNumber(this.props.unreadNotificationCount);

    this.props.requestPushPermission && PushNotificationIOS.requestPermissions();
  }

  componentWillUpdate(props){
    if( this.props.unreadNotificationCount !== props.unreadNotificationCount) {
      PushNotificationIOS.setApplicationIconBadgeNumber(props.unreadNotificationCount);
    }
  }

  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register');
    PushNotificationIOS.removeEventListener('notification');
  }

  render(){
    return (
      <View>
        <Router />
        <Alerts />
      </View>
    );
  }
}

AppContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, actionCreators)(AppContainer);
