#!/bin/bash

# Script to create a template React Native component with a specified name in the specified output folder (relative to ./app)
# Run the script in the terminal by typing 'bash react-native-init.sh'
# The output folder path can be changed in line 44

echo -n 'Enter the name of the Component: '
read ComponentName
echo -n 'Output folder path relative to ./app: '
read Output

ABS_PATH=`cd "$1"; pwd`

if [ -e "$ABS_PATH/app/$Output/$ComponentName.js" ]
  then echo "File named $ComponentName already exists in the '$ABS_PATH/app/$Output/' folder"
else
echo "'use strict';

import React, {
  Component,
  StyleSheet,
  PropTypes,
  View
} from 'react-native';

export default class $ComponentName extends Component {
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

$ComponentName.propTypes = {
}

const styles = StyleSheet.create({
  container: {
  }
})
" > "$ABS_PATH/app/$Output/$ComponentName.js"
fi
