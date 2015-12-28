'use strict';

import R from 'ramda';

const routeList = [
  {
    path: 'home',
    auth: 'login',
    config: {
      footer: 'default',
      header: 'default',
    }
  },
  {
    path: 'login',
    auth: false,
    config: {
      footer: false,
      header: false,
    }
  },
  {
    path: 'modal/confirm',
    auth: ['login','balance'],
    config: {
      footer: false,
      header: false,
    }
  }
];

export const auth = {
  login: (state) => {
    return true;
  },
  balance: (state) => {
    return true;
  }
}

export default routeList;
