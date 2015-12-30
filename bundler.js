'use strict';

require('dotenv').load();

var Webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    moment           = require('moment'),
    path             = require('path'),
    fs               = require('fs');

var webpackConfig = require('./webpack.config'),
    host          = process.env.APP_HOST || 'localhost';

module.exports = function () {
  var bundleStart = null,
      compiler    = Webpack(webpackConfig);

  compiler.plugin('compile', function () {
    bundleStart = moment();
    console.log('Bundling ...');
  });

  compiler.plugin('done', function () {
    var diff = moment().diff(bundleStart);
    console.log('Bundled in ' + diff + 'ms.');
  });

  var bundler = new WebpackDevServer(compiler, {
    publicPath: '/assets/',
    hot       : true,
    quiet     : false,
    noInfo    : true,
    stats     : {
      colors: true
    }
  });

  bundler.listen(3001, host, function () {
    console.log('Bundling project, please stand-by ...');
  });
};
