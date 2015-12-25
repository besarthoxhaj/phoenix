'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Profile from '../components/profile.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class ProfileContainer extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Profile {...this.props} />
    );
  }
}

ProfileContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
