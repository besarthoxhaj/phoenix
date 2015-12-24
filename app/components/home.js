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
        <TouchableHighlight onPress={this.props.showAlert.bind(null,'test')}>
          <Text>Show Alert</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.showModal.bind(null,'default_modal_1')}>
          <Text>Show Default Modal</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.showModal.bind(null,'custom_modal')}>
          <Text>Show Custom Modal</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
