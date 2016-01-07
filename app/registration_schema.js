export const pages       = ['Contact Info', 'Login Info', 'Address'];
export const numberPages = pages.length;

function checkEmail(email) {
  var emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  return emailFormat.test(email);
}
// validators
const optional       = (value, validate) => validate(true);
const nonEmpty       = (value, validate) => validate(value.length>0);
const validEmail     = (value, validate) => validate(checkEmail(value));// should be asynchronous call
const greaterThan6   = (value, validate) => validate(value.length>6);
const passwordsEqual = (value, validate, state) => validate(value===state['Login Info']['Password']);
const equals11or12   = (value, validate) => validate(value.length===11||value.length===12); // should be asynchronous call

export const schemaValidation = {
  'Contact Info': {
    'First Name':   nonEmpty,
    'Last Name':    nonEmpty,
    Email:          validEmail,
    'Phone Number': equals11or12
  },
  'Login Info': {
    Username:           nonEmpty, //should be asynchronous call
    'Password':         greaterThan6,
    'Confirm Password': passwordsEqual
  },
  'Address': {
    'Address Line 1': nonEmpty,
    'Address Line 2': optional,
    'City':           nonEmpty,
    'County':         nonEmpty,
    'Postcode':       nonEmpty,
    'Country':        nonEmpty
  }
};

export const initialState = {
  currentIndex: 0,
  page:         pages[0],
  'Contact Info': {
    'First Name':   {value: '', validated: false, type: 'text'},
    'Last Name':    {value: '', validated: false, type: 'text'},
    Email:          {value: '', validated: false, type: 'text'},
    'Phone Number': {value: '', validated: false, type: 'text'},
  },
  'Login Info': {
    Username:           {value: '', validated: false, type: 'text' },
    'Password':         {value: '', validated: false, type: 'text', componentOptions: {secureTextEntry: true} },
    'Confirm Password': {value: '', validated: false, type: 'text', componentOptions: {secureTextEntry: true} },
  },
  'Address': {
    'Address Line 1': {value: '', validated: false, type: 'text'},
    'Address Line 2': {value: '', validated: false, type: 'text'},
    'City':           {value: '', validated: false, type: 'text'},
    'County':         {value: '', validated: false, type: 'text'},
    'Postcode':       {value: '', validated: false, type: 'text'},
    'Country':        {value: '', validated: false, type: 'text'}
  }
}
