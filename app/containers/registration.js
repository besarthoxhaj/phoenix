'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';

import * as RegistrationActions from '../actions/registration.js';

import RegistrationPage from '../components/registration_page.js';

const actionCreators = {...RegistrationActions};

class Registration extends Component {
  render(){
    const {
      validateInput,
      changeInput,
      changeRegistrationPage,
      submitForm,
      currentPage
    }
    return (
      <RegistrationPage
        inputs                 = {this.props[currentPage]}
        changeInput            = { changeInput }
        changeRegistrationPage = { changeRegistrationPage }
        submitForm             = { submitForm }
        currentPage            = { currentPage }
      />
    );
  }
}

Registration.propTypes = {
  page1:                  PropTypes.obj,
  page2:                  PropTypes.obj,
  currentPage:            PropTypes.string,
  validateInput:          PropTypes.func,
  changeInput:            PropTypes.func,
  changeRegistrationPage: PropTypes.func,
  submitForm:             PropTypes.func
};

const mapStateToProps = state => {
  return {
    ...state.registration,
  };
};

export default connect(mapStateToProps, actionCreators)(Registration);
