'use strict';

var Nodemon = function () {
};

Nodemon.prototype.run = function (options, callback) {
  var started = false;

  return require('gulp-nodemon')(options)
    .on('start', function () {
      if (! started) {
        callback();
        started = true;
      }
    });
};

module.exports = new Nodemon();
