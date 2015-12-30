// import fetch from 'isomorphic-fetch';

/**
* Functions return a promise created by fetch
* which is then resolved in the request wrapper
**/

/**
* Create an authenticated POST or PUT request
*
* @param {string} - method (POST/PUT)
* @param {string} - url
* @param {object} - data (request body)
* @param {string} - token (for authentication)
*
**/

export function createAuthReq(method, url, data, token) {
  if (!token) {
    throw new Error('Token required to send an authenticated request');
  }
  const req = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(data)
  };

  return fetch(url, req);
}

/**
* Create a POST or PUT request without authentication
*
* @param {string} - method (POST/PUT)
* @param {string} - url
* @param {object} - data (request body)
*
**/

export function createReq(method, url, data) {
  const req = {
    method: method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  };

  return fetch(url, req);
}
