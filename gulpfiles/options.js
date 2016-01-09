'use strict';

var options = {
  browserSync : {
    proxy   : 'http://localhost:3000',
    files   : [ 'dist/**/*.*' ],
    browser : 'google chrome',
    port    : 7000,
    ui      : {
      port : 7001
    }
  },
  jade        : {
    index : {
      source      : 'src/index.jade',
      destination : 'dist'
    }
  },
  nodemon     : {
    script : 'server/bin/www'
  }
};

module.exports = options;
