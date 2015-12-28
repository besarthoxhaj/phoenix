'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.goBack}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
