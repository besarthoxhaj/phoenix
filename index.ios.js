
'use strict';

require('regenerator/runtime')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Provider } from 'react-redux/native';
import configureStore from './app/configure_store.js';
import App from './app/containers/app.js';

import { subscribeServices } from './app/services/'
import alert from './app/services/alert.js';
import netinfo from './app/services/netinfo.js';
import actionsheet from './app/services/action_sheet.js';
import notification from './app/services/notification.js';

const store = configureStore();

class phoenix extends Component {

  componentDidMount () {
    subscribeServices(store, [alert,netinfo,actionsheet,notification]);
  }

  render(){
    return (
      <Provider store={store}>
        {() => {
          return (
            <App />
          );
        }}
      </Provider>
    );
  }
};

AppRegistry.registerComponent('phoenix', () => phoenix);
