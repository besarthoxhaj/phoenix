'use strict';

import React, { Component, View } from 'react-native';
// containers
import Router from './router.js';
import Modal from './modal.js';
import Alert from './alert.js';

class AppContainer extends Component {

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

export default AppContainer;
