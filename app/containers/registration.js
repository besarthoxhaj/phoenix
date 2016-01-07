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
      submitPage,
      page,
      back,
      buttonText
    } = this.props;

    return (
      <RegistrationPage
        inputs                 = {this.props[page]}
        changeInput            = { changeInput }
        back                   = { back }
        submitPage             = { submitPage }
        page                   = { page }
        validateInput          = { validateInput }
        buttonText             = { buttonText }
      />
    );
  }
}

Registration.propTypes = {
  'Contact Info':         PropTypes.object,
  'Login Info':           PropTypes.object,
  Address:                PropTypes.object,
  currentPage:            PropTypes.string,
  buttonText:             PropTypes.string,
  validateInput:          PropTypes.func,
  changeInput:            PropTypes.func,
  changeRegistrationPage: PropTypes.func,
  submitPage:             PropTypes.func
};

const mapStateToProps = state => state.registration;

export default connect(mapStateToProps, actionCreators)(Registration);
