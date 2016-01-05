/**
 *  Apple Push Notification service, from https://github.com/argon/node-apn.
 *
 *  IMPORTANT NOTES:
 *  - by default, if the environment variable NODE_ENV=production is set, the module
 *    will connect to the production gateway. Otherwise it will connect to the sandbox.
 *  - the key supplied to create the apn connection need to be correctly set to either
 *    development, ad_hoc_production (beta testing) or production (submitting to App store).
 *  - the certificate is either development or production
 *
 *
 *  API Events:
 *  - 'error': emitted when an error occurs during initialisation of the module
 *  - 'transmitted': the notification has been trasmitted to Apple, doesn't mean was succesful and can be called several times.
 *  - 'completed': when all the pending notifications have been sent to Apple
 *  - 'transmissionError': when the notification arrives to Apple and encounters some problem there
 *
**/

'use strict';

var apn = require('apn');
var path = require('path');

module.exports = {
  sendNotification: sendNotification
}

/**
* DEVELOPMENT connection config
* - uses the development certifcates and key to connect to the development gateway
**/

var apnConnection = new apn.Connection({
  production: false,
  cert: path.join(__dirname, 'development_cert.pem'),
  key: path.join(__dirname, 'development_key.pem'),
});


/**
* AD HOC PRODUCTION connection config
* - uses the ad hoc production certificate and key to connect to the APN production gateway
* Comment in the section below for ad hoc production (i.e. beta testing on a limited number of devices)
**/

// var apnConnection = new apn.Connection({
//  production: true,
//  cert: path.join(__dirname, 'production_cert.pem'),
//  key: path.join(__dirname, 'ad_hoc_production_key.pem'),
// });


/**
 *  Create a apn instance.
 *  @param {String} - device_token
 *  @return {Object} - new instance object
**/
function getNewApnInstance (device_token) {

  return {
    device: new apn.Device(device_token),
    note: new apn.Notification()
  };
}

apnConnection.on('transmitted', function (notification, device){
  console.log('on.transmitted', arguments);
});

apnConnection.on('transmissionError', function (errorCode, notification, device) {
  console.log('on.transmissionError',arguments);
});

/**
 *  Send notification to a specific device
 *  @param (Function) - callback
 *
**/
function sendNotification (device_token, alert, payload) {

  var instance = getNewApnInstance(device_token);
  instance.note.alert = alert;
  instance.note.payload = payload;
  apnConnection.pushNotification(instance.note, instance.device);
};
