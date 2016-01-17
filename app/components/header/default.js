'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

import H1 from '../helpers/_h1.js';
import iPhoneScale from '../helpers/_iphone.js';

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        { this.props.showBackButton && (
          <TouchableOpacity onPress={this.props.back ? () => this.props.navigateTo({name: this.props.back}) : this.props.goBack} style = { styles.arrowTouch }>
            <View style={styles.arrowBox}>
              <Image
                source = { require('../../images/left-arrow.png') }
                style = { styles.backArrow }
                resizeMode = 'contain'
              />
            </View>
          </TouchableOpacity>
        )}
        {
          !this.props.showBackButton &&  (<View style = { styles.arrowBalancer }/>)
        }
        <H1>{this.props.headerTitle}</H1>
      </View>
    )
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  arrowTouch: {
    paddingLeft: 0
  },
  arrowBox: {
    width: 80 * iPhoneScale,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  backArrow: {
    height: 30 * iPhoneScale,
  },
});
