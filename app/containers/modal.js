'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, Modal, View } from 'react-native';
import LoadingModal from '../components/modal/_loading.js';
import * as ModalActions from '../actions/modal.js';

const actionCreators = ModalActions;

class ModalsContainer extends Component {
  render () {
    return (
      <Modal visible={this.props.modal.isVisible} transparent={true}>
        <LoadingModal text={this.props.text}/>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(ModalsContainer);
