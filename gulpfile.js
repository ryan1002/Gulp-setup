var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

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

// minify JS
gulp.task('minify', function(){
  gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// copy all html files
gulp.task('copyHtml', function(){
  gulp.src('./src/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserSync', 'sass', 'minify'], function(){
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/js/*.js', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});