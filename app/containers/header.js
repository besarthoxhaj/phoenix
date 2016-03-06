'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react-native';
import * as NavigationActions from '../actions/router.js';
import _routes from '../utils/routing/list.js';

const actionCreators = {
  ...NavigationActions,
};

class HeaderContainer extends Component {

  render () {

    const {
      header: Header,
      ...rest
    } = _routes[this.props.router.route.name].config;

    const props = {
      ...this.props,
      ...rest,
    };

    return (
      <Header {...props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(HeaderContainer);
