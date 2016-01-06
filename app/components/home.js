'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from './helpers/_button.js';

export default class Home extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Button onPress={this.props.testAlert.bind(null)} text={'Show Alert'} />
        <View style={{marginTop:10}}/>
        <Button onPress={this.props.testModal.bind(null)} text={'Show Modal'} />
      </View>
    )
  }
}

Home.propTypes = {
  testAlert: PropTypes.func.isRequired,
  testModal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
