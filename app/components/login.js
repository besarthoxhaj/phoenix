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

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Email'
          value={this.props.email}
          onChangeText={email => this.props.updateInput('email',email)}
          style={{height: 100, width: 100, backgroundColor: 'white'}}
        />
        <TouchableHighlight onPress={this.props.submit}>
          <Text>Submit</Text>
        </TouchableHighlight>
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});
