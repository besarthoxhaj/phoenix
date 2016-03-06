'use strict';

import { ActionSheetIOS } from 'react-native';

export default {
  initialise: () => {},
  onStateUpdate: state => {

      const {
        actionSheet: {
          isVisible,
          title,
          options,
          destructiveButtonIndex,
          callback,
        } 
      } = state;

    if (isVisible) {
      ActionSheetIOS.showActionSheetWithOptions({
        title,
        options,
        destructiveButtonIndex,
      }, callback);
    }
  }
}
