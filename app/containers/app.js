'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, View, PushNotificationIOS, AppStateIOS } from 'react-native';
// containers
import Router from './router.js';
import Modal from './modal.js';
import Alert from './alert.js';
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

  componentWillMount(){
    PushNotificationIOS.addEventListener('register', this.props.saveDeviceToken);
    PushNotificationIOS.addEventListener('notification', this.props.onReceiveNotification.bind(null, AppStateIOS.currentState));
    PushNotificationIOS.setApplicationIconBadgeNumber(this.props.unreadNotificationCount);
    PushNotificationIOS.requestPermissions();
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

  componentDidMount() {
    this.props.isGB(navigator);
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Router/>
        <Modal/>
        <Alert/>
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
