'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Login from '../components/login.js';
// actions
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions,
};

class LoginContainer extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Login {...this.props} />
    );
  }
}

LoginContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {return {};};

export default connect(mapStateToProps, actionCreators)(LoginContainer);
