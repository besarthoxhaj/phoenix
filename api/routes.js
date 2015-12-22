module.exports = (o) => {
  const push  = require('./handlers/push.js')(o.Apn);
  const login = require('./handlers/login.js');

  return [
    {
      method: 'POST',
      path: '/push',
      handler: push,
    },
    {
      method: 'POST',
      path: '/login',
      handler: login,
    },
  ];
};
