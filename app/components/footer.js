'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Feader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'Home'})}>
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'Profile'})}>
          <Text>Profile</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Feader.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#e8d279',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
