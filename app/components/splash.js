'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
