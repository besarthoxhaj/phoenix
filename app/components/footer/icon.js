/**
 * Footer Icons
 *
 * We have to call onPress for the link to the login page and chat page as the login page does not contain the footer.
 * If we call onPressIn the footer is removed before the unused onPress and onPressOut have a chance to run.
**/

'use strict';

import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class FooterIcon extends Component {
  render(){
    const {
      name,
      image,
      active,
      pressHandler,
    } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={ name === 'login' || name === 'chat' ? null : pressHandler }
        onPress={ name === 'login' || name === 'chat' ? pressHandler : null }
      >
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1, margin: 5}}>
          <Icon name={ image } size={30} color={ active ? '#cccc00' : 'white' } />
          <Text style={{ color: active ? '#cccc00' : 'white' }}>{ name }</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

FooterIcon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  pressHandler: PropTypes.func.isRequired,
};
