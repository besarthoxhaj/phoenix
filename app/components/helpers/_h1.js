'use strict'

import React, {
  Component,
  Text,
  StyleSheet,
  PropTypes
} from 'react-native';

export default class H1 extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text style={styles.text}>{this.props.children}</Text>
    )
  }
}

H1.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});
