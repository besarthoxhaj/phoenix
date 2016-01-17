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

import Icon from 'react-native-vector-icons/FontAwesome'

import H1 from '../helpers/_h1.js';
import iPhone from '../helpers/_iphone.js';
const {
  screenWidth,
  scale: iPhoneScale,
  mainHeaderHeight
} = iPhone;

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        { this.props.showBackButton && (
          <TouchableOpacity onPress={this.props.back ? () => this.props.navigateTo({name: this.props.back}) : this.props.goBack} style = { styles.arrowTouch }>
            <View style={styles.arrowBox}>
              <Icon name={'chevron-left'} size={30} color={'white'} />
            </View>
          </TouchableOpacity>
        )}
        {
          !this.props.showBackButton &&  (<View style = { styles.arrowBalancer }/>)
        }
        <View style={styles.middle}>
          <H1>{this.props.headerTitle}</H1>
        </View>
        <View style = { styles.arrowBalancer }/>
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
    paddingTop: 36 * iPhoneScale,
    paddingHorizontal: 20*iPhoneScale,
    backgroundColor: '#333',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: screenWidth,
  },
  middle: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 180 * iPhoneScale,
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
  arrowBalancer: {
    width: 80 * iPhoneScale,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
