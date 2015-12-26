'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, Navigator, View } from 'react-native';
// container
import Login from './login.js';
import Home from './home.js';
import Profile from './profile.js';
import Chat from './chat.js';
import Header from './header.js';
import Footer from './footer.js';
// actions
import * as StartActions from '../actions/start.js';
import * as NavigationActions from '../actions/router.js';
// utils
import check from '../utils/router.js';
import routes from '../routes.js';

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

    const finalRoute = check(route, routes, this.props.state);

    switch(finalRoute){
      case 'login':
        return (<Login />);
      case 'home':
        return (<Home />);
      case 'profile':
        return (<Profile />);
      case 'chat':
        return (<Chat />);
      default:
        return (<Login />);
    }
  }

  render(){
    console.log('this.props.router',this.props);
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
          sceneStyle={{
            flexDirection: 'column',
            flex: 2
          }}
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
    )
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
