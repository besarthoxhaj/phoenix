import { bindActionCreators } from 'redux';


export function subscribeService (store, service) {
  store.subscribe(() => {
    const actionCreatorBinder = actionCreators => bindActionCreators(actionCreators, store.dispatch)
    const state               = store.getState();

    service(state, actionCreatorBinder);
  })
}

export function subscribeServices (store, services) {
  services.forEach(subscribeService.bind(null, store))
}
