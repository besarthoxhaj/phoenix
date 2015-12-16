'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, View } from 'react-native';
// containers
import Router from './router.js';
import Alerts from './alerts.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class AppContainer extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <View>
        <Router />
        <Alerts />
      </View>
    );
  }
}

AppContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, actionCreators)(AppContainer);
