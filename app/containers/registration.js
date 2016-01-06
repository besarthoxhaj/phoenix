'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';

const actionCreators = {};

class Registration extends Component {
  render(){
    return (
      
    );
  }
}

Registration.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(Registration);
