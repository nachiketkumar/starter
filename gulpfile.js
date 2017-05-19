var 
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  notify = require('gulp-notify');

// html task
gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(livereload());
});

// sass task
gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss', { style: 'expanded' })
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles task complete' }));
});

// watch task
gulp.task('watch', ['sass', 'html'], function() {
  livereload.listen();
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
});