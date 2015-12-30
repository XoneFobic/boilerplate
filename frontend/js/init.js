/* jshint browser:true */
'use strict';

require('./vendor')();

angular.element(document).ready(function () {
  angular.bootstrap(document, [require('./modules/app').name], {
    strictDi: true
  });
});
