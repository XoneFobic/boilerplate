'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var Jade = function () {
};

Jade.prototype.run = function (options) {
  gulp.src(options.index.source)
    .pipe($.jade())
    .pipe(gulp.dest(options.index.destination));
};

module.exports = new Jade();
