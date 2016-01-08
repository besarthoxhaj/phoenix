'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Profile from '../components/profile.js';

import * as NavigationActions from '../actions/router.js';

class ProfileContainer extends Component {
  render(){
    return (
      <Profile {...this.props} />
    );
  }
}

ProfileContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, NavigationActions)(ProfileContainer);
