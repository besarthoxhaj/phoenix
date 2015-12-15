'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View
} from 'react-native';

class Router extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style = { styles.container } >
      </View>
    )
  }
}

Router.propTypes = {
}

const styles = StyleSheet.create({
  container: {
  }
})

export default Router;
