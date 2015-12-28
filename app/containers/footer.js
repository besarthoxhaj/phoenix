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

class FooterContainer extends Component {
  render(){

    const Footer = _routes[this.props.router.route.name].config.footer;

    return (
      <Footer {...this.props} />
    );
  }
}

FooterContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, actionCreators)(FooterContainer);
