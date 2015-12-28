'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Pin extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Pin</Text>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'home'})}>
          <Text>Skip</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Pin.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
