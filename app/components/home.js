'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.testAlert.bind(null)}>
          <Text>Show Alert</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.testModal.bind(null)}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
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
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
