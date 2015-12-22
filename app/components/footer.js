'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions
} from 'react-native';

export default class Feader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>Footer</Text>
      </View>
    )
  }
}

Feader.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8d279',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width,
  }
});
