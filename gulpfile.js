var gulp = require('gulp')
var jspm = require('jspm')
var concat = require('gulp-concat')
var concatCss = require('gulp-concat-css')
var htmlreplace = require('gulp-html-replace')
var rename = require('gulp-rename')
var merge = require('merge2')

var APP_BUNDLE_PATH = 'public/assets-build/js/bundle.js'
var BASE_BUNDLE_PATH = [
  'public/jspm_packages/system.src.js',
  'public/jspm.config.js',
  'public/jspm_packages/npm/react@0.14.2/dist/react.js',
  'public/jspm_packages/npm/react-dom@0.14.2/dist/react-dom.js',
  'public/jspm_packages/npm/react@0.14.2/dist/react-with-addons.js'
]

jspm.setPackagePath('.')

gulp.task('js:app-bundle', function(callback) {
  jspm.bundle('assets/js/app.js', APP_BUNDLE_PATH, {
    inject: true,
    minify: false
  }).then(function() {
    callback()
  }).catch(function(e) {
    console.log(e)
  })
})

// 打包基础库
gulp.task('js:base-bundle', function() {
  var streams = BASE_BUNDLE_PATH.map(function(path) {
    return gulp.src(path)
  })
  return merge(streams)
    .pipe(concat('base.js'))
    .pipe(gulp.dest('public/assets-build/js'))
})

gulp.task('css:bundle', function() {
  return gulp.src('public/assets/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('public/assets-build/css'))
})

// 模板资源替换
gulp.task('html:replace', function() {
  var opts = {
    js: ['assets-build/js/base.js', 'assets-build/js/bundle.js']
  }
  return gulp.src('views/index.ejs')
   .pipe(htmlreplace(opts))
   .pipe(rename('index.production.ejs'))
   .pipe(gulp.dest('views'))
})

gulp.task('default', ['html:replace'])
