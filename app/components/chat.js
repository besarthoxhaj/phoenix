'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class Chat extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Message'
          value={this.props.text}
          onChangeText={text => this.props.updateInput(text)}
        />
        <TouchableHighlight onPress={this.props.dispatchSend}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Chat.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
