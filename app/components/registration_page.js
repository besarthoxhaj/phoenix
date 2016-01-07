'use strict';

import React, { Component, PropTypes, View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

import SmartScrollView from 'react-native-smart-scroll-view';

class RegistrationPage extends Component {

  render () {
    const {
      inputs,
      changeInput,
      validateInput,
      buttonText,
      submitPage,
      page
    }                     = this.props;
    const fields          = Object.keys(inputs);
    const inputComponents = fields.map((fieldName, i) => {
      const {value, validated, type, componentOptions} = inputs[fieldName];

      switch (type) {
        case 'text':
          return (
            <View style = {styles.inputContainer} key = {i} >
              <Text style = {styles.fieldName} >
                {fieldName}
              </Text>
              <TextInput
                value              = { value }
                onChange           = { (text) => changeInput(fieldName, text) }
                smartScrollOptions = {{
                  moveToNext: false,
                  onSubmitEditing: (next) => {
                    validateInput(fieldName);
                    next();
                  },
                  type: 'text'
                }}
                onEndEditing       = { () => validateInput(fieldName) }
                autoCorrect        = { false }
                style              = { [styles.textInput, {borderColor: validated ? 'green' : 'red' }] }
                {...componentOptions}
              />
            </View>
          )
        default:
          return <View/>;
      }
    })

    return (
      <View style = {styles.container}>
        <View style = {styles.header} >
          <Text style = {styles.headerText}>
            {page}
          </Text>
        </View>
        <SmartScrollView
          contentContainerStyle = { styles.contentContainerStyle }
        >
          {inputComponents}
        </SmartScrollView>
        <TouchableOpacity
          style   = {styles.button}
          onPress = {submitPage}
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
    flex:              1,
    alignItems:        'stretch',
    backgroundColor:   'lightBlue',
  },
    header: {
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'darkBlue'
    },
      headerText: {
        fontSize: 40,
        color:    '#42647F'
      },
    contentContainerStyle: {
      alignItems: 'stretch',
      justifyContent: 'space-around',
      paddingHorizontal: 30
    },
     inputContainer: {
       paddingVertical: 10,
       flexDirection:   'row',
       justifyContent:  'space-between',
       alignItems:      'center'
     },
       fieldName: {
         fontSize: 18,
         color:    '#42647F'
       },
       textInput: {
         height:          40,
         width:           260,
         paddingLeft:     10,
         borderWidth:     3,
         borderRadius:    5,
         backgroundColor: 'white',
         fontSize:        18,
       },
     button: {
        backgroundColor:  'darkBlue',
        height:            50,
        width:             280,
        alignSelf:         'center',
        alignItems:        'center',
        justifyContent:    'center',
        paddingHorizontal: 20,
        borderRadius:      10,
        marginVertical:    20
      },
        buttonText: {
          fontSize:  15,
          color:     '#FFFFFF',
          textAlign: 'center'
        }
});

RegistrationPage.propTypes = {
  inputs:        PropTypes.object,
  changeInput:   PropTypes.func,
  validateInput: PropTypes.func,
  buttonText:    PropTypes.string,
  submitPage:    PropTypes.func,
  currentPage:   PropTypes.string,
  back:          PropTypes.func
};

export default RegistrationPage;
