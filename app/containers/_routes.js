'use strict';

// components
import empty from '../components/_empty.js';
import defaultFooter from '../components/footer/default.js';
import defaultHeader from '../components/header/default.js';
import home from './home.js';
import login from './login.js';
import chat from './chat.js';
import profile from './profile.js';
import splash from './splash.js';

const routeList = {
  '_splash': {
    auth: false,
    component: splash,
    config: {
      footer: empty,
      header: empty,
    }
  },
  'login': {
    auth: false,
    component: login,
    config: {
      footer: empty,
      header: empty,
    }
  },
  'home': {
    auth: 'login',
    component: home,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'chat': {
    auth: 'login',
    component: chat,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'profile': {
    auth: 'login',
    component: profile,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'modal/show': {
    auth: 'login',
    component: profile,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  }
};

export const auth = {
  login: (state) => {
    return true;
  },
  balance: (state) => {
    return true;
  }
}

export default routeList;
