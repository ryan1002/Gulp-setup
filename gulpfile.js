var gulp = require('gulp');

gulp.task('ryan', function(){
  console.log("heeeeeyuu");
});

// copy all html files

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
  return console.log("gulp is running now");
});