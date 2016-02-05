'use strict';

import React, {
  Text,
  View,
  StyleSheet,
  PropTypes,
  Component
} from 'react-native';
//components
import Button from './helpers/_button.js';

export default class ConfirmBet extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigateTo({name: 'deck'}) }
          text={'Go Back'}
        />
        <Button
          onPress={() => {
            this.props.noBounceBack(),
            this.props.sliceTopCard(),
            this.props.navigateTo({name: 'deck'})
          }}
          text={'Confirm'}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
  }
});
