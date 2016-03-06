'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import Profile from '../components/profile.js';

const actionCreators = {};

class ProfileContainer extends Component {
  render () {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
