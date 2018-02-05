var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    },
  })
})
// compile sass
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
     outputStyle: 'expanded'
  })
  .on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./src/css/'))
  .pipe(sourcemaps.write('./'))
  // add sourcemaps in the root of your src/css file
  .pipe(browserSync.reload({
    stream: true
  }))
});

// scripts
gulp.task('scripts', function(){
  gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

// copy all html files
gulp.task('copyHtml', function(){
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync', 'sass', 'scripts', 'copyHtml'], function(){
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/js/*.js', browserSync.reload);
  gulp.watch('./src/*.html', browserSync.reload);
});