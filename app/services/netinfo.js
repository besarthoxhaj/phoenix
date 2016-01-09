'use strict';

import { NetInfo } from 'react-native';
// actions
import * as ConnectionActions from '../actions/netinfo.js';

export default {
  initialise:    (state, actionCreatorBinder) => {
    const { setConnectionStatus } = actionCreatorBinder(ConnectionActions);

    NetInfo.isConnected.addEventListener('change', setConnectionStatus);
  },
  onStateUpdate: state => {}
}
