'use strict';

import React, { Component, View, ActivityIndicatorIOS } from 'react-native';

export default class Loading extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicatorIOS
          animating={true}
          style={{height: 80}}
          size="large"
        />
      </View>
    );
  }
}

module.exports = Loading;
