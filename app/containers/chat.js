'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Chat from '../components/chat.js';
import * as ChatActions from '../actions/chat.js';

const actionCreators = {
  ...ChatActions,
};

class ChatContainer extends Component {
  render(){
    return (
      <Chat {...this.props} />
    );
  }
}

ChatContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(ChatContainer);
