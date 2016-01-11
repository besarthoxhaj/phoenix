/** TODO alot of logic here needs to be refactored out. Some of the formatting of data should be done higher up but quick fix in place"
**/


/**
 * @param {Number} - unix time stamp
 * @return {String} - time formated as 'SAT 19TH MAY 15:30'
 *
 *
**/

import React, {  Component, StyleSheet, View, Text, Image, PropTypes, Dimensions} from 'react-native';

import iPhone from '../../helpers/_iphone.js'
// import sportImages from '../../../images/sport/logo_by_ref.js';

export default class NormalCard extends Component {

	render () {
    return (
      <View style={styles.container}>
				<Text style={{fontSize: 70, color:'#cccc00'}}>{this.props.number}</Text>
      </View>
    );
	}
}

var screenWidth = Dimensions.get('window').width
var deckWidth = screenWidth - 70 * iPhone.width;

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
			justifyContent: 'center',
			alignItems: 'center'
    }
});
