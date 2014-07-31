"use strict";

var gulp = require("gulp"),
	jshint = require("gulp-jshint"),
	uglify = require('gulp-uglify');

// JSHint task
gulp.task('lint', function() {
  gulp.src(['./main.js', './modules/**/*.js'])
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});


gulp.task('compress', function() {
  gulp.src('raw-main-bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('minified'))
});