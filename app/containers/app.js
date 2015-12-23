'use strict';

import React, { Component, View } from 'react-native';
// containers
import Router from './router.js';
import Modals from './modals.js';

class AppContainer extends Component {

  render(){
    return (
      <View style={{flex:1}}>
        <Router/>
        <Modals/>
      </View>
    );
  }
}

export default AppContainer;
