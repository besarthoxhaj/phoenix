/*
* Footer Icons
*
* We have to call onPress for the link to the login page and chat page as the login page does not contain the footer.
* If we call onPressIn the footer is removed before the unused onPress and onPressOut have a chance to run.
*
*
*/

'use strict';

import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class FooterIcon extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const {
      props: {
        name,
        image,
        active,
        pressHandler,
      }
    } = this

    return (
      <TouchableWithoutFeedback
        onPressIn={ name === 'login' || name === 'chat' ? null : pressHandler }
        onPress={ name === 'login' || name === 'chat' ? pressHandler : null }
      >
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name={ image } size={30} color={ active ? 'red' : 'green' } />
          <Text style={{ color: active ? 'red' : 'green' }}>{ name }</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
