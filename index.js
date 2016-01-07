'use strict';

require('dotenv').load();

var nodemon = require('nodemon'),
    path    = require('path'),
    color   = require('colors');

var isProduction = process.env.NODE_ENV === 'production';

if (! isProduction) require('./bundler.js')();

nodemon({
  execMap : {
    js : 'node'
  },
  script  : path.join(__dirname, 'backend', 'server'),
  ignore  : [],
  watch   : ! isProduction ? [ 'backend/*' ] : false,
  ext     : 'js'
}).on('start', function () {
  console.log('Backend started.'.green);
}).on('restart', function () {
  console.log('Backend restarted.'.green);
}).on('error', function (error) {
  console.error(error.red);
});
