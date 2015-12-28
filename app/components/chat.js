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
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Message'
          value={this.props.text}
          onChangeText={text => this.props.updateInput(text)}
          style={{height: 100, width: 100, backgroundColor: 'white'}}
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
