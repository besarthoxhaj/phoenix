'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, Navigator, View } from 'react-native';
// container
import Login from './login.js';
import Header from './header.js';
import Footer from './footer.js';
// actions
import * as StartActions from '../actions/start.js';

const actionCreators = {
  ...StartActions
};

class Router extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route,navigator){
    return (
      <Login />
    );
  }
  render(){
    return (
      <Navigator
        ref='navigator'
        initialRoute={this.props.stack[this.props.route.index]}
        initialRouteStack={this.props.stack}
        renderScene={this.renderScene}
        navigateTo={this.props.navigateTo}
        history={this.props.history}
        sceneStyle={{
          flexDirection: 'column',
          flex: 1
        }}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          } else {
            return Navigator.SceneConfigs.FadeAndroid;
          }
        }}
        navigationBar={
          <View style={{flex:1}}>
            <Header />
            <Footer />
          </View>
        }
      />
    )
  }
}

Router.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
  stack: PropTypes.array.isRequired,
};

const mapStateToProps = state => {

  const {
    navigation: {
      route,
      history,
      stack,
    }
  } = state;

  return {
    text: 'Click here!',
    route,
    history,
    stack,
  }
}

export default connect(mapStateToProps, actionCreators)(Router);

