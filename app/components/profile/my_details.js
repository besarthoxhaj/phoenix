'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
} from 'react-native';

export default class MyDetails extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>My Details</Text>
      </View>
    )
  }
}

MyDetails.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#F5FCFF',
  }
});
