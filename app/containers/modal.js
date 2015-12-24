/*
Initial ideas for modals. Use case:
- One or more standard modals which only need custom text and actions
- One or more custom modals
*/

'use strict';

import { connect } from 'react-redux/native';
import React, { Component, PropTypes, Modal, View } from 'react-native';
// components
import DefaultModal from '../components/modal/default_modal.js';
// custom modal container
import CustomModalContainer from './custom_modals/custom_modal.js';
// actions
import * as ModalActions from '../actions/modal.js';

const actionCreators = ModalActions;

let open=false;
let text;
let close;
let onPress;
let content;

class ModalsContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    switch (props.modal) {
      case 'default_modal_1':
        open = true;
        text = 'Default Modal 1',
        close = this.props.clearModal,
        content = <DefaultModal text={text} close={close}/>
      break;
      case 'custom_modal':
        open = true;
        content = <CustomModalContainer/>
      break;
      default:
        open=false;
    }
  }

  render() {
    return (
      <Modal visible={ open }>
        { content }
      </Modal>
    );
  }
}

ModalsContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  clearModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { modal: state.modal };
}

export default connect(mapStateToProps, actionCreators)(ModalsContainer);
