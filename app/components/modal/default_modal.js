'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
  Modal,
} from 'react-native';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log('props in defailt modal', this.props)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});
