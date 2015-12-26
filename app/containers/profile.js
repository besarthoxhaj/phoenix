'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Profile from '../components/profile.js';

const actionCreators = {};

class ProfileContainer extends Component {
  render(){
    return (
      <Profile {...this.props} />
    );
  }
}

ProfileContainer.propTypes = {};

const mapStateToProps = state => {return {};};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
