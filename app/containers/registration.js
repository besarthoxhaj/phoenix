'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';

import * as RegistrationActions from '../actions/registration.js';

import 'RegistrationPage' from '../components/registration_page.js';

const actionCreators = {...RegistrationActions};

class Registration extends Component {
  render(){
    return (
      <RegistrationPage
        inputs={this.props[this.props.currentPage]}
        saveInputs={this.props.saveInputs}
      />
    );
  }
}

Registration.propTypes = {
  page1:       PropTypes.obj,
  page2:       PropTypes.obj,
  currentPage: PropTypes.string,
  saveInputs: PropTypes.func
};

const mapStateToProps = state => {
  return {
    ...state.registration,
  };
};

export default connect(mapStateToProps, actionCreators)(Registration);
