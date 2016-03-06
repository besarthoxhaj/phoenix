/**
 *  Footer Icons
 *
 *  We have to call onPress for the link to the login page and chat 
 *  page as the login page does not contain the footer.
 *  If we call onPressIn the footer is removed before the unused 
 *  onPress and onPressOut have a chance to run.
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

export default class FooterIcon extends Component {

  render () {

    const {
      props: {name,image,active,pressHandler}
    } = this

    return (
      <TouchableWithoutFeedback
        onPressIn={ name === 'login' || name === 'chat' ? null : pressHandler }
        onPress={ name === 'login' || name === 'chat' ? pressHandler : null }
      >
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1, margin: 5}}>
          <Text style={{ color: active ? '#cccc00' : 'white' }}>{ name }</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
