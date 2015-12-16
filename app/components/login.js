'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

Login.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
