'use strict';

export default createRouteList;

function createRouteList (components) {
  return {
    '_splash': {
      component: components.splash,
      config: {
        footer: components.blankSpaceFooter,
        header: components.blankSpaceHeader,
      },
      auth: false,
    },
    'login': {
      component: components.login,
      config: {
        footer: components.blankSpaceFooter,
        header: components.blankSpaceHeader,
      },
      auth: false,
    },
    'pin': {
      component: components.pin,
      config: {
        footer: components.blankSpaceFooter,
        header: components.blankSpaceHeader,
        showBalance: true,
      },
      auth: false
    },
    'home': {
      component: components.home,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Home',
        showBalance: true,
      },
      auth: 'login',
    },
    'deck': {
      component: components.deck,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Deck',
        showBalance: true,
      },
      auth: 'login',
    },
    'chat': {
      component: components.chat,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Chat',
        showBackButton: true,
        showBalance: true,
      },
      auth: 'login'
    },
    'profile': {
      component: components.profile,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Profile',
        showBalance: true,
      },
      auth: 'login',
    },
    'history': {
      component: components.history,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'History',
        showBalance: true,
      },
      auth: 'login',
    },
  };
};
