'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Login from '../components/login.js';
// actions
import * as LoginActions from '../actions/login.js';

const actionCreators = LoginActions

class LoginContainer extends Component {
  render () {
    return <Login {...this.props} />;
  }
}

LoginContainer.propTypes = {
  submit:       PropTypes.func,
  goToRegister: PropTypes.func,
  updateInput:  PropTypes.func,
  email:        PropTypes.string
};

const mapStateToProps = state => state.login;

export default connect(mapStateToProps, actionCreators)(LoginContainer);
