# Gulp-setup

Steps to setting up your gulp file.

First step is to install gulp `npm install gulp --save-dev`
and create your `gulpfile.js` file.
```
var gulp = require('gulp');

gulp.task('apples', function(){
  console.log("I like apples");
});

// copy all html files

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
  return console.log("gulp has started running");
});
```
At the moment we have to write `gulp apples` and `gulp copyHtml` in order for gulp
to complete the tasks.

There is a more efficient way we can watch our files by adding a watch task to the bottom of our gulp file:

```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./src/css/'))
});

// copy all html files

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('./src/sass/*.scss', ['sass']);
});
```



