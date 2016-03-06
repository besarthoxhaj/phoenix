'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class Feader extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder='Chat with me'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  inputText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    width: 250,
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
  }
});
