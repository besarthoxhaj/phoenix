'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, Modal, View } from 'react-native';
// components
import DefaultModal from '../components/modal.js';
// actions
import * as ModalActions from '../actions/modal.js';

const actionCreators = ModalActions;

class ModalsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal visible={this.props.isVisible} transparent={true}>
        <DefaultModal text={this.props.text}/>
      </Modal>
    );
  }
}

ModalsContainer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = state => {

  return { ...state.modal };
}

export default connect(mapStateToProps, actionCreators)(ModalsContainer);
