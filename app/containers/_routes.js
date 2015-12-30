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
import pin from './pin.js';

const routeList = {
  '_splash': {
    component: splash,
    config: {
      footer: empty,
      header: empty,
    }
  },
  'login': {
    component: login,
    config: {
      footer: empty,
      header: empty,
    }
  },
  'pin': {
    component: pin,
    config: {
      footer: empty,
      header: empty,
    }
  },
  'home': {
    component: home,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'chat': {
    component: chat,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'profile': {
    component: profile,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'modal/show': {
    component: profile,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  }
};

export default routeList;
