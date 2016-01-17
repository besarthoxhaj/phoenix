# phoenix

## What?
A react-native template using redux. It covers all functionality needed to create a basic iOS app, like:
- routing system
- modal system
- log system
- notification system
- high level http request system
- global error handling system
- highly declarative and testable
and more!

## How?
Through redux.

## Why?
React native is relatively young, but really powerful. For this reason many people are using it, but there are not real best practices and a clear way to test it (reliably).
This is our small and humble attempt to set some best practices.

## Setting up Push Notifications

Based on this [tutorial](https://medium.com/@DannyvanderJagt/how-to-use-push-notifications-in-react-native-41e8b14aadae#.qh5sdqdsk)

NB: Push notifications are not available in the iOS Simulator in Xcode. To test push notifications, you need an iOS device, as well as an Apple Developer license.

To get an overview of the process of sending Push Notifications read [The Path of a Push Notification](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html) on the iOS Developer Library Guide.

### Step 1: Add PushNotificationIOS Library and Link

Copy the PushNotificationIOS.xcodeproj file (from the node_modules/react-native/Libraries/PushNotifications folder in your project) into the Libraries folder in Xcode. Follow the step-by-step guide to linking libraries in the React Native docs on the website.

Alternatively install the ['rnpm'](https://github.com/rnpm/rnpm) module and then run `rnpm link` from the command line to link all libraries with native dependencies.

### Step 2: Add to AppDelegate.m

Add the following lines of code to the Appdelegate.m file

At the top of the file:

```objective-c
#import "RCTPushNotificationManager.h"
```

At the bottom of the file before '@end':

```objective-c
// Required for the register event.
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
 [RCTPushNotificationManager application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}
// Required for the notification event.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification
{
 [RCTPushNotificationManager application:application didReceiveRemoteNotification:notification];
}
```

### Step 3: Get certificates

Push notifications are sent from Apple servers to the application on a users phone.

A [step-by-step guide](https://parse.com/tutorials/ios-push-notifications) can be found on the Parse website. This is an overview of the process:

1. Create an App ID and the associated SSL certificate on the Apple Developer website associated with your Developer account. This certificate will allow our notification server to connect to the Apple Push Notification Service (APNs) send push notifications to the application identified by the App ID on a user's phone (identified by their specific device token). Each App ID is required to have its own client SSL certificate.

  * 1.1 Create a certificate signing request file ('CertificateSigningRequest.certSigningRequest'). This will authenticate the creation of the SSL certificate.

  * 1.2 Create an AppID on the Apple Developer Member Center  - every IOS application needs a unique AppID
  * 1.3 Configure your App ID for **development** push  notifications (NB a separate certificate is needed for production). This involves uploading the '.certSigningRequest' file, generating an SSL certificate of the form '**cert.cer**', downloading it and installing it in your keychain on your Mac

  * 1.4 Export the certificate from the keychain and name it '**key.p12**'.

2. Create a new Provisioning Profile for push notifications in the Apple Developer Member Centre and install it.
  * A Provisioning Profile authenticates your device to run app
  * In Xcode > Preferences > Accounts click 'Download all' to download the Push notification provisioning profile


**NB: For Ad Hoc Production (beta testing) or Production (submission to the App store), new certificates and keys need to be generated so the whole of Step 3 needs to be repeated.**

### Step 4: Set up the APN server

Our app server sends push notifications to APNs which then sends it to the user

A push notification server can be set up using the [node-apn](https://github.com/argon/node-apn) module can be used (or a 3rd party service like Parse).

To set up a connection with node-apn, you need a Certificate and Key files. These correspond to the 'cert.cer' and 'key.p12' files created in Step 3.

These files need to be converted into '.pem' files. Follow the tutorial on the [node-apn wiki](https://github.com/argon/node-apn/wiki/Preparing-Certificates)

The key commands are:

```bash
$ openssl x509 -in cert.cer -inform DER -outform PEM -out cert.pem
$ openssl pkcs12 -in key.p12 -out key.pem -nodes
```

Run these from the folder in which your cert.cer and key.p12 files are saved.

Save these '.pem' files in the same folder as your APN server. To set up an APN server follow the instructions on the 'node-apn' module [docs](https://github.com/argon/node-apn/blob/master/doc/connection.markdown)

Basic set up boilerplate:

```js
var apn = require('apn');
var path = require('path');

var apnConnection = new apn.Connection({
  production: false,
  cert: path.join(__dirname, 'cert.pem'),
  key: path.join(__dirname, 'key.pem'),
});
```

### Use PushNotificationIOS inside your React-Native component

Event listeners can be attached to the 'register' and 'notification' events. It is best to add these in the top level of your app inside `componentWillMount` where `registerDeviceToken` and `onReceiveNotification` are redux actions:

```js
componentWillMount(){
  PushNotificationIOS.addEventListener('register', this.props.registerDeviceToken)
  PushNotificationIOS.addEventListener('notification', this.props.onReceiveNotification.bind(null, AppStateIOS.currentState))

  PushNotificationIOS.requestPermissions();
}
```
The device token is passed to the 'registerDeviceToken' action and can then be saved. The device token is a hexadecimal string and is like a phone number. It enables the APNs to locate the device on which the app is installed.

In this example the currentState of the app is also used to respond to the push notification depending on if the app is running in the background or currently active.

### Trying it out!

Run this app on your phone and log the device token. Then send yourself a test push notification by sending a request to the /push endpoint with your device token:

```js
curl localhost:9009/push --data 'device_token=your_token_here'

```
