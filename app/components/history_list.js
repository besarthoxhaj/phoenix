'use strict';

import React, {
  StyleSheet,
  View,
  ListView,
  Component,
  PropTypes,
  Text
} from 'react-native';

import RefreshableListView from 'react-native-refreshable-listview';

class HistoryList extends Component {

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return <Text key={rowID}>{rowData}</Text>
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    return <View key={rowID} style={styles.separator} />;
  }

  loadData(cb){
    // mocking async call to fetch data for the selectedTab
    return setTimeout(cb, 1000)
  }

  render () {
    const { selectedTab, loadData } = this.props; // use the value of selectedTab to specify the data to refresh
    let mockData;
    switch (selectedTab) {
      case 'INBOX':
        mockData = ["New message from Jack", "New message from Izaak"];
        break;
      case 'SENT MESSAGES':
        mockData = ["Email sent to Bes", "Email sent to Nikki"];
        break;
      case 'TRASH':
        mockData = ["Rubbish 1", "Rubbish 2"];
        break;
      default:
      mockData = [];
    }

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => true}).cloneWithRows(mockData);

    return (
      <RefreshableListView
        dataSource                       = {dataSource}
        renderRow                        = {this.renderRow}
        renderSeparator                  = {this.renderSeparator}
        loadData                         = {loadData.bind(null, selectedTab)}
        refreshDescription               = {"Refreshing " + selectedTab}
        automaticallyAdjustContentInsets = {false}
      />
    );
  }
}

HistoryList.propTypes = {
  selectedTab: PropTypes.string
};

const styles = StyleSheet.create({
  separator: {
    height:          1.5,
    backgroundColor: '#CCCCCC'
  }
});

export default HistoryList;
