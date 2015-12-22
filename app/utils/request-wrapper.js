import { NetInfo } from 'react-native';
/** NetInfo can be used to asynchronously check if the user is online/offline
*  More info: https://facebook.github.io/react-native/docs/netinfo.html
**/



 /** EXAMPLE use in an action:

 import { createReq } from './create-request.js'

 const login = (username, password) => dispatch => {
    const data      = { username, password}
    const request   = createReq('POST', API_URL + '/login', data); // returns a promise
    const onSuccess = json => {
       if (json.status === 'success') {
         dispatch(updateSessionToken(json.token));
         dispatch(loginAndSync());
       } else {
         dispatch(loginFail('Sorry password or username did not match'));
       }
     }
     const onError = (error, errorType) => {
       dispatch(loginFail('Sorry' + errorType));
     }

     sendRequest({ request, onSuccess, onError })

    }
  }

**/


/**
* If there is an error in the fetch request
* it is re-sent at the intervals defined below.
**/

const retryIntervals = [
  10,
  20
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
* If the number of attempts is less that the number of retryIntervals
* the request is sent again
* @param {object} - request options object
* @param {number} - attempt
* @param {string} - error from fetch request
*
* NB: using 'async' so that 'await' can be used to resolve promises and return the value
**/

export const onError = async (options, attempt, error) {
  if (retryIntervals[attempt]) {
    setTimeout(
      () => sendRequest(options, ++attempt),
      retryIntervals[attempt]
    )
  } else {
    const isConnected = await NetInfo.isConnected.fetch();
    const errorType = isConnected ? 'serverUnreachable' : 'noNetwork'
    return options.onError(error, errorType);
  }
}

export const onComplete = async (options, res) {
  if (res.status == 200 && res.ok) {
    let data = await res.json();
     options.onSuccess(data)
  } else {
    // error handling for 404 status codes etc
    options.onError(error);
  }
}
