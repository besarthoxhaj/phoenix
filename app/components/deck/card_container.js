'use strict';

import React, { Component, PropTypes } from 'react-native';

import NormalCard from './cards/normal_card.js';
import EmptyCard from './cards/empty_card.js';
import Loading from '../helpers/_loading.js';

export default class CardContainer extends Component {

  propTypes: {
    card: PropTypes.object
  };

	render () {
    if (this.props.card && this.props.card.number) {
        return (
          <NormalCard {...this.props.card}/>
        );
    } else {
        return <Loading/>;
    }
	}
}
