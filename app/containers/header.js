'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, View } from 'react-native';
// components
import Header from '../components/header.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class RouterNavBar extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Header />
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, actionCreators)(RouterNavBar);
