'use strict';

import { connect } from 'react-redux/native';

import React, { Component } from 'react-native';
// components
import Deck from '../components/deck/deck.js';
//actions
import * as DeckActions from '../actions/deck.js';
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...DeckActions,
  ...NavigationActions
};

class DeckContainer extends Component {
  componentWillMount() {
    this.props.returnDeck()

  }
  render(){
    return (
      <Deck {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actionCreators)(DeckContainer);
