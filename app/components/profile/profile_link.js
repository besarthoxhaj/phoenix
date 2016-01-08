import  React, { StyleSheet, Text, Image, View, TouchableOpacity, Component, PropTypes } from 'react-native';

class ProfileLink extends Component {

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.pressHandler} style={styles.touchable}>
          <View style={styles.content}>
            <Text style={styles.title}>{this.props.name}</Text>
          </View>
          <View style={styles.content}>
            <Image source={require('../../images/right-arrow.png')} resizeMode='contain' style={styles.arrow}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

ProfileLink.PropTypes = {
  name: PropTypes.string,
  pressHandler: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
    backgroundColor: 'transparent',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'transparent'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    paddingLeft: 16
  },
  arrow: {
    marginLeft: 7,
    width: 7,
  }
});


export default ProfileLink;
