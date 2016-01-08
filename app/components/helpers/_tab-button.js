/**
* INDIVIDUAL TAB BUTTON COMPONENT
* - tab takes text, buttonhandler and selected props
* - if selected is true the tab has a black underline
*
**/

import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  PropTypes
} from 'react-native';

class TabButton extends Component {

  render () {
    const {
      props: { pressHandler, buttonText, selected, width },
    } = this;
    return (
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={[styles.button, width && {width: width}, selected && styles.selected]}
          onPress={ pressHandler }
        >
          <Text style={[styles.textButton]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

TabButton.propTypes = {
  buttonText: PropTypes.string,
  pressHandler: PropTypes.func,
  selected: PropTypes.bool,
  width: PropTypes.number
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#CACACA',
  },
    button: {
      flex: 1,
      paddingTop: 15,
      paddingBottom: 15 ,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selected: {
      borderBottomWidth: 3,
    },
      textButton: {
        color: '#777',
        fontSize: 16,
      },
});

export default TabButton;
