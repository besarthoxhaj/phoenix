'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.navigateTo.bind(null,{name:'Home'})}>
          <Text>'In Login. Go To Home'</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
