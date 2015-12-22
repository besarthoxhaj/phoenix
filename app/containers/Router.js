'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes, Navigator, View } from 'react-native';
// container
import Login from './login.js';
import Home from './home.js';
import Header from './header.js';
import Footer from './footer.js';
// actions
import * as StartActions from '../actions/start.js';
import * as NavigationActions from '../actions/navigation.js';

const actionCreators = {
  ...StartActions,
  ...NavigationActions,
  showAlert,
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
  renderScene(route,navigator){
    switch(route.name){
      case 'Login':
        return (<Login />);
      case 'Home':
        return (<Home />);
      default:
        return (<Login />)
    }
  }
  render(){
    return (
      <Navigator
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
        navigationBar={
          <View style={{flex:1,flexDirection:'column'}}>
            <Header />
            <Footer />
          </View>
        }
      />
    )
  }
}

Router.propTypes = {
  route: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
  stack: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    route: state.navigation.route,
    history: state.navigation.history,
    stack: state.navigation.stack,
  }
}

export default connect(mapStateToProps, actionCreators)(Router);
