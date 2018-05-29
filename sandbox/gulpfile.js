var gulp = require('gulp'),
babel = require('gulp-babel')
gulp.task('build', function(){
  return gulp.src('src/app.js').pipe(babel()).pipe(gulp.dest('build'))
})
