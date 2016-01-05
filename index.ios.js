
'use strict';
require('regenerator/runtime')
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  PushNotificationIOS,
  AppStateIOS,
  AlertIOS,
} from 'react-native';

class phoenix extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '_'};
  }

  componentWillMount(){

    const that = this;

    PushNotificationIOS.addEventListener('register', function () {
      console.log('register', arguments, AppStateIOS);
    });

    PushNotificationIOS.addEventListener('notification', function () {
      console.log('AppStateIOS',AppStateIOS);
      if (AppStateIOS.currentState === 'background') {
        that.setState({text:'background'});
      } else {
        that.setState({text:'active'});
      }
    });

    PushNotificationIOS.requestPermissions(function () {
      console.log('requestPermissions', arguments, AppStateIOS);
    });
  }

  componentWillUnmount(){

    AppStateIOS.removeEventListener('change', function () {
      console.log('change', arguments);
    });

    PushNotificationIOS.removeEventListener('register', function () {
      console.log('register', arguments, AppStateIOS);
    });

    PushNotificationIOS.removeEventListener('notification', function () {
      console.log('notification', arguments, AppStateIOS);
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('phoenix', () => phoenix);
