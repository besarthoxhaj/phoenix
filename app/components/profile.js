'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
} from 'react-native';

import ProfileLink from './profile/profile_link.js';

export default class Profile extends Component {
  render(){
    const Links = linkInfo.map((link, index) => {
      return (
        <ProfileLink
          key          = { index }
          name         = { link.name }
          pressHandler = { () => this.props.navigateTo({name: link.link}) }
        />
      );
    });
    return (
      <View style={styles.container}>
        {Links}
      </View>
    )
  }
}

Profile.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#F5FCFF',
  }
});

const linkInfo = [
  {
    name: 'My Details',
    link: 'profile/my_details'
  },
  {
    name: 'My Friends',
    link: 'profile/my_friends'
  }
]
