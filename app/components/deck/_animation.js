// Functions related to deck animation

'use-strict';

import {
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

var { height:screenHeight, width:screenWidth } = Dimensions.get('window');

var SWIPE_THRESHOLD = screenWidth/3;
/*
* Initialise pan responder.
* Track dx, dy i.e. the change in x and y as a user swipes.
* Using dx, dy set the state of pan.x and pan.y which (in getTopCardAnimation) is used to determine the position
* of the card
*
*/
export function handleAnimation() {
  this._panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this.getTopCardAnimation(0.5, true),
    onStartShouldSetPanResponderCapture: callTopCardAnimation.bind(this),
    onPanResponderMove: Animated.event([null, {
      dx: this.state.pan.x,
      dy: this.state.pan.y,
    }]),
    onPanResponderRelease: handleCardRelease.bind(this)
  });
}
/*
* Determine which direction the card should rotate
* Call topCardAnimation function passing in the rotation direction
*
*
*/
function callTopCardAnimation(e) {
  this.rotateTop = e.nativeEvent.pageY <= screenHeight/2;
  this.setState({borderWide: 3}, function() {
    this.getTopCardAnimation(this.state.borderWide, this.rotateTop);
  });
  return true;
}

//Card returns to middle or swipes left or right dependent
function handleCardRelease() {
this.state.pan.flattenOffset();
this.setState({borderWide: 0.5}, function() {
  this.getTopCardAnimation(this.state.borderWide, this.state.rotateOnAuto);
});
 if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
   if (this.state.pan.x._value <= 0) {
     Animated.timing(this.state.pan.x, {
       toValue: -600,
       duration: 400,
     }).start(() => this.setState({currentCard:this.props.nextCard}, ()=> setTimeout(()=>this.swipeLeft(),0)));
   } else {
     Animated.timing(this.state.pan.x, {
       toValue: 600,
       duration: 400,
     }).start(() => this.swipeRight());
   }
 } else {
   Animated.spring(this.state.pan, {
     toValue: {x: 0, y: 0},
     friction: 4
   }).start();
 }
}
