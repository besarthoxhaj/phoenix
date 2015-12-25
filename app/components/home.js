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
        <TouchableHighlight onPress={this.props.showAlert.bind(null,'alert_1')}>
          <Text>Show Alert</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.showModal.bind(null,'modal_1')}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Home.propTypes = {
  showAlert: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
