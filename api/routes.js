'use strict';

module.exports = (o) => {
  const push = require('./handlers/push.js')(o.Apn);
  return [
    {
      method: 'POST',
      path: '/push',
      handler: push,
    },
  ];
};
