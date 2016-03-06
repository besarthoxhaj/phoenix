'use strict';

import { bindActionCreators } from 'redux';

export function subscribeServices (store, services) {

  const actionCreatorBinder = actionCreators => bindActionCreators(actionCreators, store.dispatch);
  const getState = store.getState;

  services.forEach(service => service.initialise(actionCreatorBinder, getState));

  store.subscribe(() => {

    const state = store.getState();

    services.forEach(service => service.onStateUpdate(state, actionCreatorBinder ));
  });
};
