'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Home from '../components/home.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class HomeContainer extends Component {

  constructor(props){
    super(props);
  }
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
