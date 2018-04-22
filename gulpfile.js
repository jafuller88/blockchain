var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task("default", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/test.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('blockchain.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});