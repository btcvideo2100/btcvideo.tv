var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')

gulp.task('browserify', function() {
  return browserify('public/assets/js/app.jsx')
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .on('error', function(err) { console.log(err.message) })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/assets-build/js'))
})

gulp.task('watch', function() {
  var watcher = gulp.watch('public/assets/js/*.jsx', ['browserify'])
  watcher.on('change', function() {
    console.log('bundle regenerated...')
  })
})

gulp.task('default', ['browserify', 'watch'])
