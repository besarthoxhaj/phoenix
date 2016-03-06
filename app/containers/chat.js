'use strict';

import { connect } from 'react-redux/native';
import React, { Component } from 'react-native';
import Chat from '../components/chat.js';
import * as ChatActions from '../actions/chat.js';

const actionCreators = {
  ...ChatActions,
};

class ChatContainer extends Component {
  render () {
    return (
      <Chat {...this.props} />
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(ChatContainer);
