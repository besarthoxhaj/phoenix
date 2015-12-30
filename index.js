'use strict';

require("babel-core/register")({
  presets: ["es2015"]
});

var server = require('./api/server.js')({
  env: process.env.NODE_ENV || 'test',
  logger: true,
});

server.start(function () {
  console.log('Server running with -> \n PORT:%d\n NODE_ENV:%s\n', server.info.port, process.env.NODE_ENV);
});
