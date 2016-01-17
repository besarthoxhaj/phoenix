'use strict';

import createRouteList from './create_list.js';
// components
import empty from '../../components/_empty.js';
import defaultFooter from '../../components/footer/default.js';
import chatFooter from '../../components/footer/chat.js';
import blankSpaceFooter from '../../components/header/blank_space.js'
import defaultHeader from '../../components/header/default.js';
import blankSpaceHeader from '../../components/header/blank_space.js'
import home from '../../containers/home.js';
import deck from '../../containers/deck.js';
import confirm_bet from '../../containers/confirm_bet.js';
import login from '../../containers/login.js';
import chat from '../../containers/chat.js';
import profile from '../../containers/profile.js';
import splash from '../../containers/splash.js';
import pin from '../../containers/pin.js';
import history from '../../containers/history.js';

const components = {
  empty,
  defaultFooter,
  chatFooter,
  blankSpaceFooter,
  defaultHeader,
  blankSpaceHeader,
  home,
  deck,
  confirm_bet,
  login,
  chat,
  profile,
  splash,
  pin,
  history,
};

export default createRouteList(components);
