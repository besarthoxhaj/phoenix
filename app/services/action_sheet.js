
'use strict';

import { ActionSheetIOS } from 'react-native';

/**
* ActionSheetIOS.showActionSheetWithOptions function takes two arguments
* @param {Object}: `options` - object of shape:
*        {
*          title: {string}
*          options: {array} //button names
*          cancelButtonIndex: {number} //if there is a cancel button in options array
*          destructiveButtonIndex: {number} //if there is a button that needs to have red text
*        }
* @param {function}: `callback` - function gets passed the index of the button that is pressed.
**/

export default {
  initialise: () => {},
  onStateUpdate: (state) => {

    if (state.actionSheet.isVisible) {
      ActionSheetIOS.showActionSheetWithOptions({
        title: state.actionSheet.title,
        options: state.actionSheet.options,
        destructiveButtonIndex: state.actionSheet.destructiveButtonIndex,
      }, state.actionSheet.callback);
    }
  }
}
