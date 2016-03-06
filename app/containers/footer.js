'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import * as NavigationActions from '../actions/router.js';
import _routes from '../utils/routing/list.js';

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

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(FooterContainer);
