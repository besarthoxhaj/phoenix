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

  constructor(props) {
    super(props);
  }

  render(){

    const {
      props: {
        name,
        imageSrc,
        active,
        pressHandler,
      }
    } = this

    return (
        <TouchableWithoutFeedback
          onPressIn={ name === 'login' ? null : pressHandler }
          onPress={ name === 'login' ? pressHandler : null }
        >
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={ imageSrc }
              style={{ height: 40, width: 40 }}
              resizeMode={'contain'}
            />
            <Text style={ active ? { color: 'red'} : { color: 'green'} }>{ name }</Text>
          </View>
        </TouchableWithoutFeedback>

    )
  }
}
