'use strict';

require('dotenv').load();

var Webpack           = require('webpack'),
    autoprefixer      = require('autoprefixer'),
    csswring          = require('csswring'),
    path              = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var assetsPath = path.resolve(__dirname, 'public', 'assets'),
    entryPath  = path.resolve(__dirname, 'frontend', 'js', 'bootloader.js');

var host = process.env.APP_HOST || 'localhost',
    port = process.env.APP_PORT || 8080;

module.exports = {
  devtool : 'eval',
  entry   : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + host + ':3001',
    entryPath
  ],
  output  : {
    path       : assetsPath,
    filename   : 'js/app.js',
    publicPath : '/assets/'
  },
  module  : {
    loaders : [
      { test : /\.js$/, loader : 'ng-annotate!jshint', exclude : /node_modules|bower_components/ },

      { test : /\.css$/i, loader : 'style!css' }, // This will be vendor
      { test : /\.scss$/i, loader : 'style!css!sass' },
      { test : /\.less$/i, loader : 'style!css!less' },

      { test : /\.html$/i, loader : 'html' },
      { test : /\.jade$/i, loader : 'jade' },

      { test : /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/i, loader : 'file?name=fonts/[name].[ext]?[hash]' },

      {
        test    : /\.(jpe?g|png|gif|svg)$/i,
        loaders : [
          'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss : [ autoprefixer ],
  plugins : [
    new Webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host  : host,
      port  : port,
      proxy : 'http://' + host + ':3000/',
      ui    : {
        port : port + 1
      }
    }, {
      reload : false
    })
  ]
};
