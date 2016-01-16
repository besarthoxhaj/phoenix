/**
*
* LOCATION ACTION
* Geonames.org is being used to get the country code for the latitude and longitude of the device's current location
* THE ADDITION OF US: LOCATION IS USED IN DEVELOPMENT AS SIMULATOR LOCATION IS SET TO USA
*
**/

'use strict';

import * as types from '../action_types.js';
import * as alert from './alert.js';

export const correctCountry = correct_country => {
  return { type: types.CORRECT_COUNTRY, correct_country }
}

export const isGB = (navigator) => {
  return (dispatch, getState) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } } = position
      fetch('http://api.geonames.org/countryCode?lat='+latitude+'&lng='+longitude+'&username=izaak')
      .then((response) => {
        var country = response._bodyText;
        if (country.indexOf('GB') < 0 && country.indexOf('US') < 0) {
          dispatch(correctCountry(false))
          dispatch(alert.show('On holiday?', 'You cannot use our service outside of the UK', [{
            text: 'Try again',
            onPress: () => {
              dispatch(alert.reset());
              dispatch(isGB(navigator))
            }
          }]))
        }
      })
    },(error) => {
      if (error.code === 1) {
        dispatch(alert.show('Location disabled', 'Enable in settings', [{
          text: 'Try again',
          onPress: () => {
            dispatch(alert.reset());
            dispatch(isGB())
          }
        }]))
      }
    });
  }
}
