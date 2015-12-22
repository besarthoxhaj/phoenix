export function subscribeService (store, service) {
  store.subscribe(function(){
    console.log(arguments);
    const state = store.getState();
    service(state)
  })
}

export function subscribeServices (store, services) {
  services.forEach(subscribeService.bind(null, store))
}
