'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Feader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'home'})}>
          <Text>Go Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'login'})}>
          <Text>Go Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'profile'})}>
          <Text>Go Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'chat'})}>
          <Text>Go Chat</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Feader.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8d279',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
