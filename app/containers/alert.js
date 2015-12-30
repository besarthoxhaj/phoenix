'use strict';

import { connect } from 'react-redux/native';
// components
import React, { Component, PropTypes, AlertIOS } from 'react-native';
// actions
import * as AlertActions from '../actions/alert.js';

const actionCreators = AlertActions;

class AlertsContainer extends Component {

  componentWillReceiveProps(props){
    if (props.isVisible) {
      AlertIOS.alert(
        props.title,
        props.message,
        props.buttons
      )
    }
  }
  render(){
    return (
      null
    );
  }
}

AlertsContainer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array,
};

const mapStateToProps = state => {
  return { ...state.alert };
}

export default connect(mapStateToProps, actionCreators)(AlertsContainer);
