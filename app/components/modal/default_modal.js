'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
  Modal,
  ActivityIndicatorIOS
} from 'react-native';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <ActivityIndicatorIOS/>
        <TouchableHighlight onPress={this.props.close}><Text>Close</Text></TouchableHighlight>
      </View>
    )
  }
}

ModalComponent.propTypes = {
  close: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230,230,230, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});
