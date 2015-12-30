(function () {
  'use strict';

  module.exports = angular.module('app.core', [
    'ui.router'
  ]);

  require('./app.directive.js');
})();
