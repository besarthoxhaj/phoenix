'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import Splash from '../components/splash.js';

const actionCreators = {};

class SplashContainer extends Component {
  render () {
    return (
      <Splash {...this.props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(SplashContainer);
