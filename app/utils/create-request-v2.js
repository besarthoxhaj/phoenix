import fetch from 'isomorphic-fetch';

/**
* Functions return a promise created by fetch
* which is then resolved in the request wrapper
**/

/**
* Create an authenticated POST request
*
* @param {string} - url
* @param {object} - data (request body)
* @param {string} - token (for authentication)
*
**/

export const postAuthReq = (url, data, token) => {
  return fetch(url, post(req(data, authHeader(token))))
}

/**
* Create an authenticated PUT request
*
* @param {string} - url
* @param {object} - data (request body)
* @param {string} - token (for authentication)
*
**/

export const putAuthReq = (url, data, token) => {
  return fetch(url, put(req(data, authHeader(token))))
}

/**
* Create an unauthenticated POST request
*
* @param {string} - url
* @param {object} - data (request body)
*
**/

export const postReq = (url, data) => {
  console.log(url, data)
  return fetch(url, post(req(data)))
}

/**
* Create an authenticated GET request
*
* @param {string} - url
* @param {string} - token (for authentication)
*
**/

export const getAuthReq = (url, token) => {
  return fetch(url, get(req(null, authHeader(token))))
}

/**
* Create a GET request
* @param {string} - url
**/

export const getReq = (url) => {
  return fetch(url, get(req(null)))
}

const req = (data=null, headers={}) => {
  const reqHeader = {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  };
  return data ? { ...reqHeader, body: JSON.stringify(data) } : reqHeader
};

const post = requestOptions => ({
  ...requestOptions,
  method: 'POST'
})

const put = requestOptions => ({
  ...requestOptions,
  method: 'PUT'
})

const get = requestOptions => ({
  ...requestOptions,
  method: 'GET'
})

const authHeader = token => {
  if (!token) {
    throw new Error('Token required to send an authenticated request');
  } else {
   return { 'Authorization': token }
  }
}
