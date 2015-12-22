'use strict';

import React, { Component, View } from 'react-native';
// containers
import Router from './router.js';
import Modals from './modals.js';
import Alert from './alert.js';

class AppContainer extends Component {

  render(){
    return (
      <View style={{flex:1}}>
        <Router/>
        <Modals/>
        <Alert/>
      </View>
    );
  }
}

export default AppContainer;
