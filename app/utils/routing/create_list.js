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
      },
      auth: false
    },
    'home': {
      component: components.home,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Home',
      },
      auth: 'login',
    },
    'chat': {
      component: components.chat,
      config: {
        footer: components.chatFooter,
        header: components.defaultHeader,
        headerTitle: 'Chat',
        showBackButton: true,
      },
      auth: 'login'
    },
    'profile': {
      component: components.profile,
      config: {
        footer: components.defaultFooter,
        header: components.defaultHeader,
        headerTitle: 'Profile',
      },
      auth: 'login',
    }
  };
};
