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

//

gulp.task('watch', function(){
  gulp.watch('./src/sass/*.scss', ['sass']);
});