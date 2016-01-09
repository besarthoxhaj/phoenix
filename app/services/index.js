'use strict';

import { bindActionCreators } from 'redux';

// params:
//  store, the object instantiated at root level
//  services an array of service functions to be subscribed
//
export function subscribeServices (store, services) {
  const actionCreatorBinder = actionCreators => bindActionCreators(actionCreators, store.dispatch);
  const initialState        = store.getState();

  services.forEach(service => service.initialise(initialState, actionCreatorBinder));

  store.subscribe(() => {
    const state = store.getState();

    services.forEach(service => service.onStateUpdate(state));
  })
}

// a service is an object with properties
// {
//    initialise: function that takes initialState (i.e. your store)
//                and actionCreatorBinder (to bind the services actions to the dispatch method)
//
//    onStateUpdate: function that takes in current state
//                   and will be called every time there is a change to state.
// }
