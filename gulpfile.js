var gulp = require('gulp');

gulp.task('ryan', function(){
  console.log("heeeeeyuu");
});

// copy all html files

gulp.task('copyHtml', function(){
  gulp.src('scr/*.html')
    .pipe(gulp.dest('dist'));
});