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

import Button from './helpers/_button.js';

export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Email'
          value={this.props.email}
          onChangeText={email => this.props.updateInput('email',email)}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          value={this.props.email}
          onChangeText={email => this.props.updateInput('email',email)}
        />
        <Button
          onPress={this.props.submit}
          text={'Submit'}
        />
      </View>
    )
  }
}

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
