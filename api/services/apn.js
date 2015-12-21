/**
 *	Apple Push Notification service, from https://github.com/argon/node-apn.
 *
 *	IMPORTANT NOTES: by default, if the environment variable NODE_ENV=production is set, the module
 *	will connect to the production gateway. Otherwise it will connect to the sandbox.
 *
 *	API Events:
 *	- 'error': emitted when an error occurs during initialisation of the module
 *	- 'transmitted': the notification has been trasmitted to Apple, doesn't mean was succesful and can be called several times.
 *	- 'completed': when all the pending notifications had been sent to Apple
 *	- 'transmissionError': when the notification arrives to Apple and encounters some problem there
 *
**/

'use strict';

var apn = require('apn');
var path = require('path');

module.exports = {
  sendNotification: sendNotification
}

var apnConnection = new apn.Connection({
	production: false,
	cert: path.join(__dirname, 'cert.pem'),
	key: path.join(__dirname, 'key.pem'),
});

/**
 *	Create a apn instance.
 *	@param {String} - device_token
 *	@return {Object} - new instance object
**/
function getNewApnInstance (device_token) {

	return {
		device: new apn.Device(device_token),
		note: new apn.Notification()
	};
}

/**
 *	Send notification to a specific device
 *	@param (Function) - callback
 *
**/
function sendNotification (callback) {

	var instance = getNewApnInstance('c2c5d6c01b98aa4e0b41ec63a9f6ab9de5c48f436a7a87e6383922ebec3d8443');  // hard coded to Niki's iPhone

	instance.note.alert = 'Nikki has split a bet with you!';

	apnConnection.pushNotification(instance.note, instance.device);

	apnConnection.on('transmitted', function (notification, device){
		return callback(undefined, {
			notification: notification,
			device: device
		});
	});

	apnConnection.on('transmissionError', function (errorCode, notification, device) {
		return callback({
			errorCode: errorCode,
			notification: notification,
			device: device
		}, undefined);
	});
};
