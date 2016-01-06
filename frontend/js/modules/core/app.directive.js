(function () {
  'use strict';

  module.exports = angular.module('app.core').directive('app', appDirective);

  /* ngInject */
  function appDirective () {
    console.debug('<app></app> Directive Loaded.');

    return {
      replace  : true,
      restrict : 'E',
      template : require('./app.view.jade')
    };
  }
})();
