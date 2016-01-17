'use strict';

export const subscribeServices = (store, services) => {

  const initialState = store.getState();

  services.forEach(service => service.initialise(initialState, store.dispatch));

  store.subscribe(() => {
    const state = store.getState();
    services.forEach(service => service.onStateUpdate(state,store.dispatch));
  });
}
