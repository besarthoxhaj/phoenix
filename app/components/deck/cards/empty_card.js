'use strict';

import React, { Component, StyleSheet, View, Text, Image } from 'react-native';

import iPhone from '../../helpers/_iphone.js';

export default class EmptyCard extends Component {
	render () {
    return (
      <View style={styles.container}>
          <Text>You have run out of cards</Text>
      </View>
    );
	}
}

var screenWidth = require('Dimensions').get('window').width;
var deckWidth = screenWidth - 80 * iPhone.width;

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: deckWidth,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      flexDirection: 'column',
      width: screenWidth-60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bar: {
      backgroundColor: 'transparent',
      borderColor: '#DDD',
      borderBottomWidth: 1,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      width: 91,
      left: -42,
      position: 'absolute',
      top: -36,
      transform: [
        {
          rotate: '-45degrees',
        },
      ],
    },
    sportLogo: {
      height: 20,
      width: 20,
      top: 25,
      transform: [
        {
          rotate: '45degrees',
        },
      ],
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    runOut: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat',
      paddingHorizontal: 20,
    },
    ohno: {
      fontWeight: '500',
      fontSize: 25,
      marginBottom: 5,
      color: 'white',
      fontFamily: 'Montserrat-Bold',
    }
});
