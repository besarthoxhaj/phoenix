'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, Navigator, View } from 'react-native';
// container
import Header from './header.js';
import Footer from './footer.js';
// actions
import * as StartActions from '../actions/start.js';
import * as NavigationActions from '../actions/router.js';
// utils
import _routes from './_routes.js';

const actionCreators = {
  ...StartActions,
  ...NavigationActions,
};

class Router extends Component {

  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  componentWillUpdate(nextProps) {

    const { route : newRoute, stack: newStack} = nextProps;
    const { route } = this.props;

    if (newRoute.name !== route.name){
      this.refs.navigator.jumpTo(newStack[newRoute.index]);
    }
  }

  renderScene(route){
    const Component = _routes[route.name].component;
    return (<Component />);
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Header />
        <Navigator
        // use Navigator to transition between different scenes in your app.
          ref='navigator'
          initialRoute={this.props.stack[this.props.route.index]}
          initialRouteStack={this.props.stack}
          renderScene={this.renderScene}
          history={this.props.history}
          configureScene={route => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            } else {
              return Navigator.SceneConfigs.FadeAndroid;
            }
          }}
        />
        <Footer />
      </View>
    );
  }
}

Router.propTypes = {
  route: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
  stack: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { ...state.router, state };
}

export default connect(mapStateToProps, actionCreators)(Router);
