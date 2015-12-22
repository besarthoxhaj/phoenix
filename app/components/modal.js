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
      <Modal animated={true} visible={true} transparent={true}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello, modal!</Text>
        </View>
      </Modal>
    )
  }
}

ModalComponent.propTypes = {
  navigateTo: PropTypes.func.isRequired,
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
