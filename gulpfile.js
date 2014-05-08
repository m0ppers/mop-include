var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build', function() {
    gulp.src('mop-include.js')
    .pipe(uglify())
    .pipe(concat('mop-include-min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['build']);
