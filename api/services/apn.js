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
  sendSplit: sendSplit
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
 *	Send split bet notification to the receiver of a split bet.
 *	@param {String} - device token from the phone of the receipient
 *	@param {String} - sender first name
 *	@param {??????} - ?? payload
 *
**/
function sendSplit (callback) {

	var instance = getNewApnInstance(device_token);

	instance.note.alert = 'Nikki has split a bet with you!';

	apnConnection.pushNotification(note, instance.device);

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
