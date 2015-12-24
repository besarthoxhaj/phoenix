'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Home from '../components/home.js';
// actions
import { showAlert } from '../actions/alert.js';
import { testModal } from '../actions/modal.js';

const actionCreators = {
  showAlert,
  testModal,
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
  testModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {return {}}

export default connect(mapStateToProps, actionCreators)(HomeContainer);
