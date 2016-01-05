'use strict';

module.exports = Apn => {
  return (req, reply) => {
    const { device_token, alert, payload } = req.payload;
    Apn.sendNotification(device_token, alert, payload);
    return reply({
      status: 'success',
    });
  }
}
