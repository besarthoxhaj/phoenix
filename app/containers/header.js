'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// actions
import * as NavigationActions from '../actions/router.js';
// routes
import _routes from './_routes.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {
  render(){
    const Header = _routes[this.props.router.route.name].config.header;
    return (
      <Header {...this.props} />
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
