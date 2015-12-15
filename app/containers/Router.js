'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';

// components
import Home from '../components/home.js';
// actions
import * as StartActions from '../actions/start.js';

const actionCreators = {
  ...StartActions
};

export default class Router extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Home {...this.props} />
    )
  }
}

Router.propTypes = {
  text: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    text: 'Click here!'
  }
}

export default connect(mapStateToProps, actionCreators)(Router);

