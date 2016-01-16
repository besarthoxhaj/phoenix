'use strict';

import React, { Component, StyleSheet, View, Image } from 'react-native';

var iPhone = require('../../helpers/_iphone.js');

export default class BlankCard extends Component {

	render () {
    return (
      <View style={styles.container}>

      </View>
    );
	}
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#DDD',
      borderWidth: 0.5,
      backgroundColor: 'white'
    },
});
