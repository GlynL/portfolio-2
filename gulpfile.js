/* 
GETTING STARTED W/ GULP
https://travismaynard.com/writing/getting-started-with-gulp 
*/

const gulp = require('gulp');
const babel = require('gulp-babel');

const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
// const sass = require('gulp-sass');

// lint task
gulp.task('lint', function () {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('all.js'))
    // .pipe(gulp.dest('dist/js'))
    .pipe(rename('min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  // gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('default', ['lint', /* 'sass', */ 'scripts', 'watch']);