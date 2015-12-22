'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Modal from '../components/modal.js';
// actions
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...NavigationActions,
};

class ModalsContainer extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal {...this.props} />
    );
  }
}

ModalsContainer.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    alerts: [{}]
  };
}

export default connect(mapStateToProps, actionCreators)(ModalsContainer);
