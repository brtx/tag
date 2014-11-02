var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var karma = require('karma').server;

var paths = {
  sourcefiles : [
  './src/tag-sorted.js',
  './src/tag-th']
};

gulp.task('webserver', function() {
  gulp.src('examples')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('release', function() {
  gulp.src(paths.sourcefiles)
    .pipe(concat('tag.js'))
    .pipe(gulp.dest('./release/'))
    .pipe(gulp.dest('./examples/'))
});

/**
* Runs our unit tests with karma
* */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    autoWatch: false
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 * */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true
  }, done);
});



gulp.task('watch', function(){
  gulp.watch(paths.sourcefiles, ['release']);
});


gulp.task('default', ['release', 'watch', 'webserver']);
