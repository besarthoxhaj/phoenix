'use strict';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

import { Provider } from 'react-redux/native';
import configureStore from './app/configure_store.js';
import App from './app/containers/app.js';

import { subscribeServices } from './app/services/index.js';
import alert from './app/services/alert.js';
import actionsheet from './app/services/action_sheet.js';
import notification from './app/services/notification.js';
import socket from './app/services/socket.js';

const store = configureStore();

class phoenix extends Component {

  componentDidMount () {
    subscribeServices(store, [
      alert,
      actionsheet,
      notification,
      socket
    ]);
  }

  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
};

AppRegistry.registerComponent('phoenix', () => phoenix);
