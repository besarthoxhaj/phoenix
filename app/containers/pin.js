'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import * as NavigationActions from '../actions/router.js';
import Pin from '../components/pin.js';

const actionCreators = {
  ...NavigationActions,
};

class PinContainer extends Component {
  render () {
    return (
      <Pin {...this.props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(PinContainer);
