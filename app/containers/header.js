'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Default from '../components/header/default.js';
// actions
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {
  render(){
    return (
      <Default {...this.props} />
    );
  }
}

HeaderContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
