'use strict';

// bebel
require('babel-core/register')({
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread'],
});

require('./reducers/navigation.test.js');
