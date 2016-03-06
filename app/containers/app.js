'use strict';

import {connect } from 'react-redux/native';
import React, {
  Component,
  View,
} from 'react-native';

import Router from './router.js';
import Modals from './modal.js';
import * as NavigationActions from '../actions/router.js';
import * as PushNotificationActions from '../actions/notifications.js';

const actionCreators = {
  ...NavigationActions,
  ...PushNotificationActions
};

class AppContainer extends Component {

  render () {
    return (
      <View style={{flex:1}}>
        <Router />
        <Modals />
      </View>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(AppContainer);
