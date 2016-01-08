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

import Deck from './deck/deck.js';

export default class Profile extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

Profile.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#F5FCFF',
  }
});
