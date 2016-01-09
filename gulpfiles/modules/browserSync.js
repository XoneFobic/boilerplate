'use strict';

var browserSync = require('browser-sync');

var BrowserSync = function () {
};

BrowserSync.prototype.run = function (options) {
  options = options || {};

  browserSync.init(options);
};

BrowserSync.prototype.reload = function () {
  browserSync.reload();
};

module.exports = new BrowserSync();
