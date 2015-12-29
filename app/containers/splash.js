'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Splash from '../components/splash.js';

const actionCreators = {};

class SplashContainer extends Component {
  render(){
    return (
      <Splash {...this.props} />
    );
  }
}

SplashContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(SplashContainer);
