'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Image,
} from 'react-native';

import NavIcon from './footerIcon.js';

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.createIconArray = this.createIconArray.bind(this);
  }

  createIconArray(currentLocation){

    const { props: { navigateTo } } = this;

    return iconArray.map((icon, i) => {
      var active = currentLocation.indexOf(icon.name) > -1 ? true : false;
      return (
        <NavIcon
          key={ i }
          name={ icon.name }
          image={ icon.image }
          active={ active}
          pressHandler={ () => navigateTo({name: icon.name}) }
        />
      );
    });
  }

  render(){

    const {
      props: { router: { route: { name }}},
      createIconArray
    } = this;

    const icons = createIconArray(name);

    return (
      <View style={styles.container}>
        { icons }
      </View>
    )
  }
}

Footer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

var iconArray = [
  {
    name: 'home',
    image: 'home'
  },
  {
    name: 'login',
    image: 'anchor'
  },
  {
    name: 'profile',
    image: 'reddit-alien'
  },
  {
    name: 'chat',
    image: 'comment'
  },
];

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#e8d279',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
