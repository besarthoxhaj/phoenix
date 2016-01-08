'use strict';

import { connect } from 'react-redux/native';

import React, { Component, PropTypes } from 'react-native';
// components
import Deck from '../components/deck/deck.js';
import * as DeckActions from '../actions/deck.js';

const actionCreators = {
  ...DeckActions,
};

class DeckContainer extends Component {
  render(){
    console.log('asdasd',this.props)
    return (
      <Deck {...this.props} />
    );
  }
};

DeckContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(DeckContainer);
