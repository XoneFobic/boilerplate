module.exports = function () {
  'use strict';

  angular.module('app.core').directive('app', function () {
    console.debug('<app></app> Directive Loaded.');

    return {
      replace : true,
      restrict: 'E',
      template: require('./app.view.html')
    };
  });
}();
