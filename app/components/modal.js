
/**
 * Modal system
 *
 */

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
      <Modal animated={this.props.animated} visible={this.props.visible} transparent={true}>
        <View style={this.props.visible ? styles.containerShow : styles.containerHide }>
          <Text style={styles.text}>Hello, modal!</Text>
        </View>
      </Modal>
    )
  }
}

ModalComponent.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  animated: PropTypes.bool,
  transparent: PropTypes.bool,
};

ModalComponent.getDefaultProps = {
  animated: false,
  transparent: true,
};

const styles = StyleSheet.create({
  containerShow: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHide: {
    flex: 0,
  },
  text: {
    fontSize: 20,
  }
});
