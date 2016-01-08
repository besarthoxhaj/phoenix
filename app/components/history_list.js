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

  render () {
    const { selectedTab, loadData, data } = this.props; // use the value of selectedTab to specify the data to refresh

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => true}).cloneWithRows(data);

    return (
      <RefreshableListView
        dataSource                       = {dataSource}
        renderRow                        = {this.renderRow}
        renderSeparator                  = {this.renderSeparator}
        loadData                         = {loadData}
        refreshDescription               = {"Loading..."}
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
