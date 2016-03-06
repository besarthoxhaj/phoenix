'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, View } from 'react-native';
import Header from './header.js';
import Footer from './footer.js';
import * as NavigationActions from '../actions/router.js';
import _routes from '../utils/routing/list.js';

const actionCreators = {
  ...NavigationActions,
};

class Router extends Component {

  render () {

    const Component = _routes[this.props.router.route.name].component;
    const fullProps = { ...this.props, routeProps: { ...this.props.router.route.props } };

    return (
      <View style={{flex:1}}>
        <Header back={_routes[this.props.router.route.name].config.back} deckBorder={_routes[this.props.router.route.name].config.deckBorder}/>
        <Component />
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, actionCreators)(Router);
