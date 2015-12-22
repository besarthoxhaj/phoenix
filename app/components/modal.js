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
    return (
      <View style={styles.container}>
        <Modal animated={true} transparent={true} visible={false} style={styles.container}>
          <Text>Hello, modal!</Text>
        </Modal>
      </View>
    )
  }
}

ModalComponent.propTypes = {
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
