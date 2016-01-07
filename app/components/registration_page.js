'use strict';

import React, { Component, PropTypes, View, TextInput, Text, StyleSheet } from 'react-native';

import SmartScrollView from 'react-native-smart-scroll-view';

class RegistrationPage extends Component {

  render(){
    const {
      inputs,
      changeInput,
      validateInput,
      buttonText,
      submitForm
    }                     = this.props;
    const fields          = Object.keys(inputs)
    const inputComponents = fields.map((fieldName, i) => {
      return (
        <View style = {styles.inputField} >
          <Text style = {styles.fieldName} >
            {fieldName}
          </Text>
          <TextInput
            value:             = { inputs[fieldName].value }
            onChange           = { (text) => changeInput(fieldName, text) }
            smartScrollOptions = {{
              moveToNext: i === fields.length - 1,
              onSubmitEditing: (next) => {
                validateInput(fieldName);
                next();
              },
              type: 'text'
            }}
            onEndEditing       = { () => validateInput(fieldName) }
            autoCorrect        = { false }
            style              = { [styles.texInput, {borderColor: inputs[fieldName].validated ? 'green' : 'red' }] }
          />
        </View>
      )
    })

    return (
      <View style = {styles.container}>
        <SmartScrollView>
          {inputComponents}
        </SmartScrollView>
        <TouchableOpacity
          style   = {styles.button}
          onPress = {submitForm}
        >
          <Text style = {styles.buttonText} >
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
   inputContainer: {
     flexDirection:  'row',
     justifyContent: 'space-between',
     alignItems:     'center'
   },
     fieldName: {
       fontSize: 10,
       color:    '#42647F'
     },
     textInput: {
       height:          30,
       width:           220,
       paddingLeft:     10,
       borderWidth:     1,
       borderRadius:    5,
       backgroundColor: 'white',
       fontSize:        12,
     },
   button: {
      backgroundColor: '#1E90FF',
      height:            40,
      alignItems:        'center',
      justifyContent:    'center',
      paddingHorizontal: 20,
      borderRadius:      10
    },
      buttonText: {
        fontSize:  15,
        color:     '#FFFFFF',
        textAlign: 'center'
      }
})

})

RegistrationPage.propTypes = {
  inputs:        PropTypes.obj,
  changeInput:   PropTypes.func,
  validateInput: PropTypes.func,
  buttonText:    PropTypes.string,
  submitForm:    PropTypes.func,
};

export default RegistrationPage;
