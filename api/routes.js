module.exports = (o) => {
  const push    = require('./handlers/push.js')(o.Apn);
  return [
    {
      method: 'GET',
      path: '/push',
      handler: push,
    },
  ];
};
