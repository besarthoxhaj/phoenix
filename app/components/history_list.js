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
import Icon from 'react-native-vector-icons/FontAwesome'

class HistoryList extends Component {

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <View style={styles.row}>
        <Icon name={'envelope'} size={20} color={'#d3d3d3'} style={{flex:1, paddingLeft: 20}} />
        <Text key={rowID} style={{flex:2}}>{rowData}</Text>
      </View>
    )
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    alignItems: 'center'
  },
  separator: {
    height:          1.5,
    backgroundColor: '#CCCCCC'
  }
});

export default HistoryList;
