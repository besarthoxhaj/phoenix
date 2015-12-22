/**
* Functions return a promise created by fetch
* which is then resolved in the request wrapper
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
