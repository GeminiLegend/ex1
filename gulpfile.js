var gulp          = require('gulp'),
    livereload    = require('gulp-livereload'),
    sass          = require('gulp-sass');


gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
    //.pipe(livereload());
});
 
gulp.task('watch', function () {
  //livereload.listen();
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);