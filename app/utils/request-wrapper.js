 /**

 FETCH REQUEST WRAPPER

 Main function: 'sendRequest'
 - use to re send the fetch request if there is an error

 EXAMPLE use of the 'sendRequest' function in a redux action:

 import { createReq } from '../utils/create-request.js'
 import { sendRequest } from '../utils/request-wrapper.js'

 export const login = (username, password) => async (dispatch) => {
   const data      = { username, password }
   const request   = () => createReq('POST', 'http://localhost:9009/login', data); // returns a promise
   const onSuccess = json => {
     if (json.status === 'success') {
       dispatch(loginSuccess());
     } else {
       dispatch(loginFail('Sorry password or username did not match'));
     }
   }
   const onError = (error, errorType) => {
     dispatch(loginFail('Sorry ' + errorType));
   }
   sendRequest({ request, onSuccess, onError })
 }

**/

import { NetInfo } from 'react-native';
/** NetInfo can be used to asynchronously check if the user is online/offline
*  More info: https://facebook.github.io/react-native/docs/netinfo.html
**/

/**
* If there is an error in the fetch request
* it is re-sent at the intervals defined below.
**/

const retryIntervals = [
  1000,
  2000,
  3000,
  4000,
  5000,
]

/**
* Wrapper around the fetch request to retry the request if there is an error
* @param {object} - options
*  - request: created using the create-request helper (see create-request.js)
*             should return a promise from a fetch request
*  - onSuccess(data): when fetch request returns successfully
*  - onError(error, errorType): when there is an error in the fetch request
* @param {number} - attempt (defaults to zero)
**/

export function sendRequest(options, attempt=0) {
  options.request()
    .then(onComplete.bind(null, options))
    .catch(onError.bind(null, options, attempt))
}

/**
* Error handling for fetch request
*
* If the number of attempts is less that the number of retryIntervals
* the request is sent again
* @param {object} - request options object
* @param {number} - attempt
* @param {string} - error from fetch request
*
* NB: using 'async' so that 'await' can be used to resolve promises and return the value
**/

const onError = async (options, attempt, error) => {
  console.log("ERROR")
  if (retryIntervals[attempt]) {
    setTimeout(
      () => sendRequest(options, ++attempt),
      retryIntervals[attempt]
    )
  } else {
    const isConnected = await NetInfo.isConnected.fetch();
    const errorType = isConnected ? 'server unreachable' : 'no network'
    return options.onError(error, errorType);
  }
}

const onComplete = async (options, res) => {
  console.log("COMPLETE")
  if (res.status == 200 && res.ok) {
    let data = await res.json();
     options.onSuccess(data)
  } else {
    // maybe add error handling for 404 status codes etc
    return options.onError(error, 'response error');
  }
}
