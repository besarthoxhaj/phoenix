/*
* Animations home screen
*
*
*
*/
import React, { StyleSheet, Animated, View, PropTypes, Dimensions, Component } from 'react-native';
import QuickSwipe from './quick_swipe.js';
import CardContainer from './card_container.js';
import Blank from './cards/blank_card.js';
import iPhone from '../helpers/_iphone.js';

import { handleAnimation } from './_animation.js';

var screenWidth = Dimensions.get('window').width;
var screeHeight = Dimensions.get('window').height;

var deckWidth = screenWidth - 70 * iPhone.width;
var { deckHeight } = iPhone;
var deckBorderWidth = 0.5;

export default class Tinderable extends Component {

  propTypes: {
    currentCard: PropTypes.object,
    nextCard: PropTypes.object,
    actions: PropTypes.object,
    modalOpen: PropTypes.bool,
    errorCard: PropTypes.object,
    processingBet: PropTypes.bool,
    deck: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      topcard: styles.normalCardContainer,
      deckWideBorder: deckBorderWidth,
      rotateOnAuto: '',
      currentCard: this.props.deck.currentCard,
      bounceBack: true,
      cancelledBet: true,
    }
  }
  //Initialise animations etc.
  componentWillMount () {
    handleAnimation.call(this)
  }
  //Update currentCard when component receives new currentCard
  componentWillReceiveProps (props) {
    this.setState({currentCard:props.deck.currentCard});
  }

  componentDidUpdate() {
    if(this.props.deck.bounceBack) {
      this.state.pan.setValue({x: 600, y: 0});
      setTimeout(()=>Animated.spring(this.state.pan, {
        toValue: {x: 0, y: 0},
        friction: 4
      }).start(() => this.props.noBounceBack()),500)
    }
  }
  //Call setValue to reset pan to [0,0] i.e. transform top card to origional position or will render in far left
  swipeLeft () {
    this.state.pan.setValue({x: 0, y: 0});
    this.props.sliceTopCard()
  }

  swipeRight () {
    this.props.navigateTo({name: 'confirm_bet'});
    this.props.bounceBack()
  }

  autoSwipe (direction) {
    if (direction === 'left') {
      Animated.timing(this.state.pan.x, {
        toValue: -600,
        duration: 350,
      }).start(()=>this.swipeLeft());
    } else {
      Animated.timing(this.state.pan.x, {
        toValue: 600,
        duration: 350,
      }).start(() => this.swipeRight());
    }
  }

  topFadeOut () {
    return [
      { flex: 1 },
      {
        opacity: this.state.pan.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: [0.2, 1, 0.2]
        })
      }
    ];
  }

  getMiddleCardRotation() {
    return [
      {
        transform: [
          {
            rotate: this.state.pan.x.interpolate({
              inputRange: [-201, -200, 0, 200, 201],
              outputRange: ['0deg', '0deg', '-4deg', '0deg', '0deg']
            })
          }
        ]
      }
    ];
  }
  /*Animations for top card. Deals with rotation, change in border size and colour.
  * rotateClockWise changes the direction of the rotation dependent on user pressing on the top/bottom of card
  * NB: if (rotateClockWise) negative = '-', positive = ''; slows animations.
  * NB: width: deckWidth + (deckWideBorder - deckBorderWidth) * 2.1 is a hack. Setting multiplier to 2 causes bug
  */
  getTopCardAnimation(deckWideBorder, rotateClockWise) {
    this.setState({rotateOnAuto: rotateClockWise});
    var negative,
        positive
    if (rotateClockWise) negative = '-', positive = '';
    else negative = '', positive = '-';
    this.setState({topcard: [
      {
        transform: [{translateX: this.state.pan.x},{translateY: this.state.pan.y},
          {
            rotate: this.state.pan.x.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: [negative+'7deg', '0deg', positive+'7deg']
            })
          }
        ]
      },
      {
        borderWidth: deckWideBorder,
        width: deckWidth + (deckWideBorder - deckBorderWidth) * 2.1,
        height: deckHeight + (deckWideBorder - deckBorderWidth) * 2,
        marginTop: -deckWideBorder,
      },
      {
        borderColor: this.state.pan.x.interpolate({
          inputRange: this.props.balance ? [-320, 0, 320] : [-320, 0, 50] ,
          outputRange: ['rgb(220,20,60)', 'rgb(221, 221, 221)', 'rgb(204,204,0)']
        })
      }
    ]})
  }

  render () {
    return (
      <View style={styles.superContainer}>
        <QuickSwipe no={this.autoSwipe.bind(this, 'left')} yes={this.autoSwipe.bind(this, 'right')} contacts={this.getContacts}/>
        <View onStartShouldSetResponder={this._onStartShouldSetResponder} style={styles.container}>
          <View style={styles.backgroundCard} shouldRasterizeIOS={true}>
            <Blank/>
          </View>
          <Animated.View style={[styles.middleCardContainer, styles.normalCardContainer, this.getMiddleCardRotation()]} shouldRasterizeIOS={true}>
            <CardContainer card = {this.props.deck.nextCard}/>
          </Animated.View>
          <Animated.View {...this._panResponder.panHandlers} style={[styles.normalCardContainer, this.state.topcard]} shouldRasterizeIOS={true}>
            <Animated.View style={this.topFadeOut()}>
              <CardContainer card = {this.state.currentCard} />
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  superContainer: {
    height: screeHeight - 78 * iPhone.scale - 67,
  },
  container: {
    marginTop: 32 * iPhone.scale,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundCard: {
    position: 'absolute',
    left: 70/2 * iPhone.width,
    width: deckWidth,
    height: deckHeight,
    marginTop: -0.5,
    transform: [
      {
        rotate: '-4degrees',
      }
    ],
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  middleCardContainer: {
    position: 'absolute',
    left: 70/2 * iPhone.width,
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
    borderWidth: 0.5,
  },
});
