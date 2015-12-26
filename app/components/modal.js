'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  ActivityIndicatorIOS,
} from 'react-native';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.spinner}>
          <ActivityIndicatorIOS
            style={[styles.activitySpinner]}
            color='white'
            size='large'
          />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    )
  }
}

ModalComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'black'
  },
  activitySpinner: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'  
  }
});