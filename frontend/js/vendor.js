(function () {
  'use strict';

  module.exports = function () {
    /* Styles */
    require('../../node_modules/node-lumx/dist/scss/_lumx.scss');
    require('../../node_modules/mdi/scss/materialdesignicons.scss');
    require('../css/style.scss');

    /* Javascript */
    global.$ = global.jQuery = require('jquery');
    require('velocity-animate');
    require('angular');
    global.moment = require('moment');
    require('angular-ui-router');
    require('node-lumx');
  };
})();
