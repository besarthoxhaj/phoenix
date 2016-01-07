'use strict';

import React, {
  View,
  StyleSheet,
  Component,
  Dimensions,
  PropTypes
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

import TabButton from './helpers/_tab-button.js';
import List from './history_list.js';

class TabHistory extends Component {

  render() {

    const { selectedTab, changeSelectedTab, loadData } = this.props;

    return (
      <View style={styles.container} >
        <View style={styles.buttonContainer}>
          <TabButton
            pressHandler={() => changeSelectedTab('INBOX')}
            buttonText='INBOX'
            selected={selectedTab === 'INBOX'}
          />
          <TabButton
            pressHandler={() => changeSelectedTab('SENT MESSAGES')}
            buttonText='SENT MESSAGES'
            selected={selectedTab === 'SENT MESSAGES'}
          />
          <TabButton
            pressHandler={() => changeSelectedTab('TRASH')}
            buttonText='TRASH'
            selected={selectedTab === 'TRASH'}
          />
        </View>
        <View style={styles.loadingViewContainer}>
          <List selectedTab={selectedTab} loadData={loadData}/>
        </View>
      </View>
    );
  }
}

TabHistory.propTypes = {
  selectedTab: PropTypes.string,
  changeSelectedTab: PropTypes.func,
  loadData: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: screenWidth,
  },
  loadingViewContainer: {
    flex: 1,
    marginTop: 10,
    width: screenWidth,
  }
});

export default TabHistory;
