'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Home from '../components/home.js';
// actions
import { showAlert } from '../actions/alert.js';

const actionCreators = {
  showAlert,
};

class HomeContainer extends Component {

  render(){
    return (
      <Home {...this.props} />
    );
  }
}

HomeContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    text: 'Hello, world!'
  };
}

export default connect(mapStateToProps, actionCreators)(HomeContainer);
