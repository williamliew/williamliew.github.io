var gulp = require('gulp'),
	ulgify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// Javascript tasks
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(ulgify())
	.pipe(gulp.dest('js'))
	.pipe(reload({stream: true}));
});

// CSS tasks
gulp.task('sass', function(){
	gulp.src('./assets/sass/*.scss')
//	.pipe(concat('styles.scss'))
	.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./assets/stylesheets'))
	.pipe(reload({stream: true}));
});

// Server and watch tasks
gulp.task('default', ['sass', 'scripts'], function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./assets/sass/*.scss", ['sass']);
    gulp.watch("./assets/js/*.js", ['scripts']);
    gulp.watch("./*.html").on('change', reload);
});

