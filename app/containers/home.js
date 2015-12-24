'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Home from '../components/home.js';
// actions
import { showAlert } from '../actions/alert.js';
import { showModal } from '../actions/modal.js';

const actionCreators = {
  showAlert,
  showModal
};

class HomeContainer extends Component {
  render(){
    return (
      <Home {...this.props} />
    );
  }
}

HomeContainer.propTypes = {
  showAlert: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    text: 'Hello, world!'
  };
}

export default connect(mapStateToProps, actionCreators)(HomeContainer);
