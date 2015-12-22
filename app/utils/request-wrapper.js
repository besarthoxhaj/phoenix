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
  2000
]

/**
* Wrapper around the fetch request to retry the request if there is an error
* @param {object} - options
*  - request created using the request-helper.
*  - Should return a promise from a fetch request
* @param {function} - parse ????
* @param {number} - attempt
* - defaults to zero
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
    /**
      either return a new Promise which can be resolved in the action calling
     fetch or take in an array of actions and dispatch them .....
    **/
  }
}

export const onComplete = async (options, res) {
  if (res.status == 200 && res.ok) {
    let data = await res.json();
    /**
      return the data as a new Promise or dispatch a provided action
    **/
  } else {
    /**
     return an error based on the status code
    **/
  }
}
