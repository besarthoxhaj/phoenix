import React, { StyleSheet, View, Image, TouchableOpacity, Component, Dimensions } from 'react-native'

import iPhone from '../helpers/_iphone.js';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class QuickBet extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.no} activeOpacity={0.5}>
          <Icon name='thumbs-o-down' size={50} color='#cccc00'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.yes} activeOpacity={0.5}>
          <Icon name='thumbs-o-up' size={50} color='#cccc00'/>
        </TouchableOpacity>
      </View>
    )
  }
}

const { width } = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 25,
    width: width,
  },
})

module.exports = QuickBet;
