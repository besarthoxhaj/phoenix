'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// actions
import * as NavigationActions from '../actions/router.js';
// routes
import _routes from '../utils/routing/list.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {
  render(){
    const {
      header: Header,
      ...rest
    } = _routes[this.props.router.route.name].config;

    const props = {
      ...this.props,
      ...rest,
    };

    console.log('props',props);
    console.log('rest',rest);
    console.log('_routes[this.props.router.route.name].config',_routes[this.props.router.route.name].config);

    return (
      <Header {...props} />
    );
  }
}

HeaderContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
