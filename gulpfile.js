const gulp = require('gulp');
const plumber = require('gulp-plumber');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const paths = {
  jade: ['src/index.jade'],
  sass: ['src/styles.scss'],
  babel: ['src/scripts.js']
};

gulp.task('default', ['jade', 'sass', 'babel']);
gulp.task('watch', () => {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.babel, ['babel']);
});

gulp.task('jade', () => {
  return gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./'));
});
gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('./'));
});
gulp.task('babel', () => {
  return gulp.src(paths.babel)
    .pipe(plumber())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});