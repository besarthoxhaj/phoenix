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
    this.state = { pressStatus: false };
  }
  _onPressButton(){
    this.props.onPress();
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={1}
          style={ this.state.pressStatus ? styles.buttonPress : styles.button }
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
          onPress={this._onPressButton.bind(this)}
        >
          <Text style={ this.state.pressStatus ? styles.textPress : styles.text }>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Home.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  textPress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333'
  },
  button: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  buttonPress: {
    borderColor: '#cccc00',
    backgroundColor: '#cccc00',
    borderWidth: 1,
    borderRadius: 10,
  },
});
