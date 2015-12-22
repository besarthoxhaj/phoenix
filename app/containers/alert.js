'use strict';

import { connect } from 'react-redux/native';
// components
import React, { Component, PropTypes, AlertIOS } from 'react-native';
// actions
import * as AlertActions from '../actions/alert.js';

const actionCreators = AlertActions;

class AlertsContainer extends Component {

  componentWillReceiveProps(props) {
    const alert = props.alert;
    let message;
    let subtitle = null;
    let text = 'OK';
    let onPress = this.props.clearAlert;

    switch (alert) {
      case 'test':
        message = 'hello Jack';
        subtitle = '123';
        text = 'press me';
      break;
      case 'test2':
        message = 'hello Izaak';
        subtitle = '123';
        text = 'press me';
      break;
    }

    if (alert !== null) {
      AlertIOS.alert(
        message,
        subtitle,
        [{text, onPress}]
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
  alert: PropTypes.string,
  clearAlert: PropTypes.func,
};

const mapStateToProps = state => {
  return { alert: state.alert };
}

export default connect(mapStateToProps, actionCreators)(AlertsContainer);
