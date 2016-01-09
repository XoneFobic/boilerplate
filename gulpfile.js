'use strict';

var del         = require('del'),
    gulp        = require('gulp'),
    runSequence = require('run-sequence');

var Options = require('./gulpfiles/options');

gulp.task('default', [ 'clean' ], function () {
  runSequence('jade');
});
gulp.task('watch', [ 'default' ], function () {
  runSequence('nodemon', [ 'browser-sync' ]);
});

gulp.task('clean', del.bind(null, [ 'dist' ], { dot : true }));

gulp.task('jade', [ 'jade:index' ]);
gulp.task('jade:index', function () {
  require('./gulpfiles/modules/jade').run(Options.jade);
});

gulp.task('browser-sync', function () {
  var browserSync = require('./gulpfiles/modules/browserSync'),
      reload      = browserSync.reload;
  browserSync.run(Options.browserSync);
  gulp.watch(Options.jade.index.source, [ 'jade:index', reload ]);
});
gulp.task('nodemon', function () {
  require('./gulpfiles/modules/nodemon').run(Options.nodemon);
});
