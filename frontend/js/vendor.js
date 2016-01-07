(function () {
  'use strict';

  module.exports = function () {
    /* Styles */
    require('../../node_modules/mdi/scss/materialdesignicons.scss');
    //require('../../node_modules/materialize-css/sass/materialize.scss');
    require('../css/style.scss');

    /* Javascript */
    require('angular');
    require('angular-ui-router');
  };
})();
