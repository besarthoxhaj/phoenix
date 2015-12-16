
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
import Router from './app/containers/router.js';
const store = configureStore();

class phoenix extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
        {() => <Router /> }
      </Provider>
    )
  }
}

AppRegistry.registerComponent('phoenix', () => phoenix);
