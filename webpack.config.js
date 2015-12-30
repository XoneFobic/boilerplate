'use strict';

require('dotenv').load();

var Webpack           = require('webpack'),
    StatsPlugin       = require('stats-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer      = require('autoprefixer'),
    csswring          = require('csswring'),
    path              = require('path');

var bowerComponentsPath = path.resolve(__dirname, 'bower_components'),
    nodeModulesPath     = path.resolve(__dirname, 'node_modules'),
    assetsPath          = path.resolve(__dirname, 'public', 'assets'),
    entryPath           = path.resolve(__dirname, 'frontend', 'js', 'init.js');

var host = process.env.APP_HOST || 'localhost';

module.exports = {
  devtool: 'eval',
  entry  : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + host + ':3001',
    entryPath
  ],
  output : {
    path    : assetsPath,
    filename: 'js/app.js'
  },
  module : {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate-loader!jshint-loader', exclude: /node_modules|bower_components/ },

      { test: /\.css$/, loader: 'style-loader!css-loader!postcss' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!postcss!less-loader' },

      { test: /\.html$/, loader: 'html-loader' },

      { test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/, loader: 'file-loader?name=fonts/[name].[ext]?[hash]' },

      {
        test   : /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
          'image-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
};
