'use strict';

import { connect } from 'react-redux/native';
import React, { Component,
  PropTypes,
  Modal,
  View,
} from 'react-native';
// components
import DefaultModal from '../components/modal/default_modal.js';
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
      case 'modal_1':
        open = true;
        text = 'Modal',
        close = this.props.clearModal,
        content = <DefaultModal text={text} close={close}/>
      break;
      default:
        open=false;
    }
  }

  render() {
    return (
      <Modal visible={ open } transparent={ true }>
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
