'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Button from './helpers/_button.js';

export default class Chat extends Component {
  componentWillMount () {
    this.props.openConnection();
  }
  componentWillUnmount () {
    this.props.closeConnection();
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder='Message'
          value={this.props.text}
          onChangeText={text => this.props.updateInput(text)}
          onEndEditing={text => this.props.sendMessage(text)}
        />
        <Button onPress={this.props.sendMessage} text={'Submit'}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputText: {
    height: 100,
    width: 300,
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  }
});
