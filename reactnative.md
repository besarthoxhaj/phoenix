## X things we’ve learnt about React Native

* Manage your state in one place - we love Redux!
* Set up your routing system properly
    * If you’re using ‘Navigator’ instead of ‘NavigatorIOS’ as Facebook recommends, use something like Redux to set up a declarative routing system.
    * The current route of the app should be a state that can be accessed by any component
* For non-rendering components like ‘AlertIOS’, ‘NetInfo’, and ‘PushNotificationsIOS’ set up services which are connected to your redux actions and store instead of including the code inside your component life cycle methods.  Mount these at the route of the app. Have a look at our example here. (Jack should we write up an explanation + example?)
    * Configuring alerts and modals globally means they can be triggered through Redux actions from anywhere in the app
* Setting up the certifications for enabling push notifications can be a bit tricky. Luckily for you, we’ve already done this multiple times. Follow our guide here (link to Push notifications readme)
* Learn how to link libraries - even if you’re using something like ‘rnpm’ to download react-native related node modules, it’s worth knowing how to do it from first principles in case of any errors.
* Dealing with the keyboard appearing and obscuring text input fields can be a pain. Fortunately we’ve created a module to help - a smart scroll view that can react to keyboard events. (add link to npm module)
* Set up a helper module to deal with different screen sizes instead of requiring Dimensions everywhere - scale your views using this so they are compatible across screen sizes (add a link to the iPhone helper in Phoenix)
* If you’re used to writing html and can’t get used to inline styles write helper components to mimic different html tags e.g. ‘p’, ‘h1’ etc. and use these throughout your app. It will also help with consistency in style
* Flexbox is a godsend. Centering content is so simple
* Adding Launch Images can be tricky - here's a guide (Jack how did you do this?)


## X things we’ve learnt about Redux

* Keep Containers free of style
* Use ‘redux-logger’ middleware for development so you can view all the actions that are triggered and the state before and after
* Use the more concise form of `connect(mapStateToProps, actionCreators)(Container)` instead of the `bindActionCreators(dispatch, actionCreators)` method to bind your actions to dispatch.
* Sync reducer - place to keep the important app states that should be refreshed after server requests.
* If you’re using isomorphic-fetch in your actions for http requests and get an annoying error that looks like this **Error: Cannot read the variable self** in `node_modules/isomorphic-fetch/node_modules/whatwg-fetch/fetch.js` try the following fix:
Open the file `node_modules/isomorphic-fetch/node_modules/whatwg-fetch/fetch.js` and add at the beginning of the function:

```js
(function() {
  'use strict';

  try {  global.self = global } catch (e) {};

  if (self.fetch) {
```

Link to Phoenix - react-native, redux starter kit with push notifications, alerts, modals enabled. 
