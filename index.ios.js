
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

class phoenix extends Component {
  constructor(props) {
    super(props);
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
