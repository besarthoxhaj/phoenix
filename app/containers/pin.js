'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Pin from '../components/pin.js';

const actionCreators = {};

class PinContainer extends Component {
  render(){
    return (
      <Pin {...this.props} />
    );
  }
}

PinContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(PinContainer);
