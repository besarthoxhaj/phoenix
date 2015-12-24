'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, Modal, View } from 'react-native';
// components
import CustomModal from '../../components/modal/custom_modal.js';
// actions
import * as ModalActions from '../../actions/modal.js';

const actionCreators = ModalActions;

class CustomModalContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CustomModal close={ this.props.clearModal }/>
    );
  }
}

CustomModalContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  clearModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { modal: state.modal };
}

export default connect(mapStateToProps, actionCreators)(CustomModalContainer);
