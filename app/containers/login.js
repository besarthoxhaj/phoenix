'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Login from '../components/login.js';
// actions
import * as NavigationActions from '../actions/router.js';
import * as LoginActions from '../actions/login.js';

const actionCreators = {
  ...NavigationActions,
  ...LoginActions,
};

class LoginContainer extends Component {
  render(){
    return (
      <Login {...this.props} />
    );
  }
}

LoginContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(LoginContainer);
