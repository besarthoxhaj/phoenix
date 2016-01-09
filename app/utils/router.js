'use strict';

const routeList = {
  '_splash': {
    auth: false,
  },
  'login': {
    auth: false,
  },
  'pin': {
    auth: false, // maybe something else here
  },
  'home': {
    auth: 'login',
  },
  'chat': {
    auth: 'login',
  },
  'profile': {
    auth: 'login',
  },
  'modal/show': {
    auth: 'login',
  },
  'history': {
    auth: 'login',
  }
};


export const auth = {
  login: (state,route) => {
    if (state.store.isLoggedIn) {
      return route;
    } else if (state.store.user.email) {
      return 'pin';
    } else {
      return 'login';
    }
  }
}

/**
 * Check
 * @param  {[type]} route     [description]
 * @param  {[type]} routeList [description]
 * @param  {[type]} state     [description]
 * @return {[type]}           [description]
 */

const check = (route, state) => {

  if (!routeList[route.name]) {
    throw new Error('route name does not match with route list');
  }

  if (!routeList[route.name].auth) {
    return route.name;
  }

  if (!auth[routeList[route.name].auth]) {
    throw new Error('auth function does not exist');
  }

  return auth[routeList[route.name].auth](state,route.name);
}

export default check;
