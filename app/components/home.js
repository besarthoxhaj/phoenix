'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
  NativeModules,
} from 'react-native';

import Button from './helpers/_button.js';

export default class Home extends Component {
  
  constructor (props) {
    super(props);
    this.runLoopInJavascript = this.runLoopInJavascript.bind(this);
    this.runLoopInObjectiveC = this.runLoopInObjectiveC.bind(this);
  }

  runLoopInJavascript () {

    let emptyArray = [];
    let iterations = 20000000; // 20 mln

    console.log('runLoopInJavascript -> start ', iterations);

    for(let ii = 0; ii < iterations; ii++) {
      emptyArray.push({index: ii});
    }

    console.log('runLoopInJavascript -> finish');
  }

  runLoopInObjectiveC () {

    console.log('runLoopInObjectiveC -> start');

    NativeModules.HelloSwift.greeting('Cool!', function (name) {
      console.log('name: ', name);
    });

    console.log('runLoopInObjectiveC -> finish');
  }

  render(){
    return (
      <View style={styles.container}>
        <Button onPress={this.props.testAlert.bind(null)} text={'Show Alert'} />
        <View style={{marginTop:10}}/>
        <Button onPress={this.props.testModal.bind(null)} text={'Show Modal'} />
        <View style={{marginTop:10}}/>
        <Button onPress={this.props.showLogOutActionSheet.bind(null)} text={'Show Action Sheet'} />
        <View style={{marginTop:10}}/>
        <Button onPress={this.runLoopInJavascript.bind(null)} text={'Js loop'} />
        <View style={{marginTop:10}}/>
        <Button onPress={this.runLoopInObjectiveC.bind(null)} text={'ObjC loop'} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
