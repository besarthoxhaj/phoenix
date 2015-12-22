import { bindActionCreators } from 'redux';


export function subscribeService (store, service) {
  store.subscribe(() => {
    const state        = store.getState();
    const actionBinder = actionCreators => bindActionCreators(actionCreators, store.dispatch)

    service(state, actionCreatorBinder);
  })
}

export function subscribeServices (store, services) {
  services.forEach(subscribeService.bind(null, store))
}
