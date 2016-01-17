'use strict';

/**
 * A service is an object with properties.
 * `initialise`: function that takes initialState (i.e. your store)
 *               and actionCreatorBinder (to bind the services actions to the dispatch method)
 *
 * `onStateUpdate`: function that takes in current state and
 *                  will be called every time there is a change to state.
 *
 * @store
 * @services
 * 
 */

export const subscribeServices = (store, services) => {

  const initialState = store.getState();

  services.forEach(service => service.initialise(initialState, store.dispatch));

  store.subscribe(() => {

    const state = store.getState();
    services.forEach(service => service.onStateUpdate(state));
  })
}
