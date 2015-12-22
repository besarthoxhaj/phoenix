
'use strict';

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
import alert                 from './app/services/alert.js';

class phoenix extends Component {

  componentDidMount () {
    subscribeServices(store, [alert]);
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
