'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import H1 from '../helpers/_h1.js';

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.goBack}>
          <Text style={{color:'#cccc00'}}>Go Back</Text>
        </TouchableHighlight>
        <H1>{this.props.router.route.name}</H1>
        <H1>{"Connection Status: " + (this.props.ui.isConnected ? 'online' : 'offline') }</H1>
      </View>
    )
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  }
});
