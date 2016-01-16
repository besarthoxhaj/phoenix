/*
*
* This helper checks which iphone model is being used by checking the device height and width.
* It returns the model number (with 7 and 8 for 6+ and ipad respectively).
* It also returns 'scale', which is the ratio of the device screen height relative to iphone 6
*
*/

import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
let scale,
  model,
  width,
  keyboardHeight,
  deckHeight;

//iPhone4
if (screenWidth === 320 && screenHeight == 480) {
  scale             = 0.719,
  width             = 0.853,
  model             = 4,
  keyboardHeight    = 216,
  deckHeight        = 300
}

//iPhone5
if (screenWidth === 320 && screenHeight == 568) {
  scale             = 0.851,
  width             = 0.853,
  model             = 5,
  keyboardHeight    = 216,
  deckHeight        = 345
}

//iPhone6
if (screenWidth === 375 && screenHeight == 667) {
  scale             = 1,
  width             = 1,
  model             = 6,
  keyboardHeight    = 216,
  deckHeight        = 403
}

//iPhone6plus
if (screenWidth === 414 && screenHeight == 736) {
  scale             = 1.103,
  width             = 1.104,
  model             = 7,
  keyboardHeight    = 226,
  deckHeight        = 450
}

// iPad
if (screenWidth === 768 && screenHeight == 1024) {
  scale             = 1.535,
  width             = 2.048,
  model             = 8,
  keyboardHeight    = 264,
  deckHeight        = 450
}

const spaceWithKeyboard = screenHeight - keyboardHeight;
const wKeyboardScale    = spaceWithKeyboard / (736 - 226)

export default {
    scale,
    width,
    model,
    screenHeight,
    screenWidth,
    keyboardHeight,
    deckHeight,
    spaceWithKeyboard,
    wKeyboardScale,
    mainNavBarHeight: 78 * scale
};
