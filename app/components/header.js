'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <Text>Props: {JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

header.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
