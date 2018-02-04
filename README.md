# Gulp-setup

Steps to setting up your gulp file.

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