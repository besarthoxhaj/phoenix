'use strict';

// components
import empty from '../components/_empty.js';
import defaultFooter from '../components/footer/default.js';
import chatFooter from '../components/footer/chat.js';
import blankSpaceFooter from '../components/header/blank_space.js'
import defaultHeader from '../components/header/default.js';
import blankSpaceHeader from '../components/header/blank_space.js'
import home from './home.js';
import deck from './deck.js';
import confirm_bet from './confirm_bet.js';
import login from './login.js';
import chat from './chat.js';
import profile from './profile.js';
import splash from './splash.js';
import pin from './pin.js';
import history from './history.js';

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
  'deck': {
    component: deck,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
  'confirm_bet': {
    component: confirm_bet,
    config: {
      footer: blankSpaceFooter,
      header: blankSpaceHeader,
    }
  },
  'chat': {
    component: chat,
    config: {
      footer: chatFooter,
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
  },
  'history': {
    component: history,
    config: {
      footer: defaultFooter,
      header: defaultHeader,
    }
  },
};

export default routeList;
