'use strict';

import React, {
  View,
  StyleSheet,
  Component,
  Dimensions,
  PropTypes
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

//components
import TabButton from './helpers/_tab-button.js';
import List      from './history_list.js';

class TabHistory extends Component {

  render() {

    const { selectedTab, changeSelectedTab, loadData, data } = this.props;

    return (
      <View style={styles.container} >
        <View style={styles.buttonContainer}>
          <TabButton
            pressHandler={() => changeSelectedTab('tab1')}
            buttonText='INBOX'
            selected={selectedTab === 'tab1'}
          />
          <TabButton
            pressHandler={() => changeSelectedTab('tab2')}
            buttonText='SENT MESSAGES'
            selected={selectedTab === 'tab2'}
          />
          <TabButton
            pressHandler={() => changeSelectedTab('tab3')}
            buttonText='TRASH'
            selected={selectedTab === 'tab3'}
          />
        </View>
        <View style={styles.loadingViewContainer}>
          <List selectedTab={selectedTab} loadData={loadData} data={data}/>
        </View>
      </View>
    );
  }
}

TabHistory.propTypes = {
  selectedTab:       PropTypes.string,
  changeSelectedTab: PropTypes.func,
  loadData:          PropTypes.func
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
