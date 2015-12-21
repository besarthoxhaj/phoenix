'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>Header</Text>
      </View>
    )
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
