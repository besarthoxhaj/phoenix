
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
const store = configureStore();

import { subscribeServices } from './app/services/'
<<<<<<< HEAD
import alert from './app/services/alert.js';
=======
import alert                 from './app/services/alert.js';
import netinfo               from './app/services/netinfo.js';
>>>>>>> netinfo

class phoenix extends Component {

  componentDidMount () {
    subscribeServices(store, [alert, netinfo]);
  }

  render(){
    return (
      <Provider store={store}>
        {
          () => {
            return (
              <App />
            );
          }
        }
      </Provider>
    )
  }
}

AppRegistry.registerComponent('phoenix', () => phoenix);
