'use strict';

import { NetInfo } from 'react-native';
// actions
import * as ConnectionActions from '../actions/netinfo.js';

const NetInfoService = {
  initialise: (state,dispatch) => {
    const changeListener = NetInfoService.onNetInfoChange.bind(NetInfoService,state,dispatch);
    NetInfo.isConnected.addEventListener('change', changeListener);
  },
  onNetInfoChange: (state,dispatch,info) => {},
  onStateUpdate: state => {}
}

export default NetInfoService;