'use-strict';

import React, {
  Component,
  StyleSheet,
  Animated,
  View,
  PanResponder,
  PropTypes,
  Dimensions
} from 'react-native';

import Card from './card.js';

var SWIPE_THRESHOLD = 150;

var { height:screenHeight, width } = Dimensions.get('window');

export default class Deck extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY(),
      topcard: styles.normalCardContainer,
    }
  }

  componentWillMount () {
    console.log('bsfhad',this.props.swipeLeft)

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: function(e: Object, gestureState: Object): boolean {
        this.rotateTop = e.nativeEvent.pageY <= screenHeight/2;
        this.setState(function() {
          this.getTopCardRotation(this.rotateTop);
        });
        return true;
      }.bind(this),
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
       this.state.pan.flattenOffset();
       if (Math.abs(this.state.pan.x.__getAnimatedValue()) > SWIPE_THRESHOLD) {
         if (this.state.pan.x.__getAnimatedValue() < 0) {
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
    });
  }

  getTopCardRotation (rotateClockWise) {
    this.setState({rotateTop3: rotateClockWise});
    var negative,
        positive
    if (rotateClockWise) negative = '-', positive = '';
    else negative = '', positive = '-';
    this.setState({topcard: [
      styles.normalCardContainer,
      {
        transform: [{translateX: this.state.pan.x},{translateY: this.state.pan.y},
          {
            rotate: this.state.pan.x.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: [negative+'7deg', '0deg', positive+'7deg']
            })
          }
        ]
      }
    ]})
  }

  getCardFadeOut () {
    return [
      { flex: 1 },
      {
        opacity: this.state.pan.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: [0.5, 1, 0.5]
        })
      }
    ];
  }

  swipeLeft () {
    this.props.swipeLeft()
  }
  swipeRight () {
    this.props.swipeRight();
  }

  render () {
    return (
      <View style={styles.container}>
        <Animated.View {...this._panResponder.panHandlers} style={this.state.topcard} shouldRasterizeIOS={true}>
          <Animated.View style={ this.getCardFadeOut() }>
            <Card />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

var deckWidth = width - 70;
var deckHeight = 419;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },
  normalCardContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: deckWidth,
    height: deckHeight,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'stretch',
    marginTop: -0.5,
  },
  backgroundCard: {
    position: 'absolute',
    left: 70/2,
    width: 200,
    height: 300,
    transform: [
      {
        rotate: '-4degrees',
      }
    ],
  },
})
