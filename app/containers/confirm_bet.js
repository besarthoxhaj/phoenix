'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import ConfirmBet from '../components/confirm_bet.js';
//actions
import * as DeckActions from '../actions/deck.js';
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...DeckActions,
  ...NavigationActions
};

class ConfirmBetContainer extends Component {
  render(){
    return (
      <ConfirmBet {...this.props} />
    );
  }
}

ConfirmBet.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(ConfirmBetContainer);
