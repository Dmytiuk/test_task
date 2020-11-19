const 	gulp         = require('gulp'),
		scss         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps   = require('gulp-sourcemaps'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		plumber		 = require('gulp-plumber');
		babel        = require('gulp-babel');
		csso         = require('gulp-csso');


var SASS_INCLUDE_PATHS = [
	'./node_modules/normalize-scss/sass'
];

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
};



gulp.task('styles', function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(plumber({ errorHandler: handleError }))
		// .pipe(sourcemaps.init())
		.pipe(scss({outputStyle: 'compact', includePaths: SASS_INCLUDE_PATHS}))
		.pipe(autoprefixer({overrideBrowserslist: ['last 3 versions'], cascade: false}))
		.pipe(csso())
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('scripts', function() {
	return gulp.src(['./src/js/**/*.js', '!./src/js/libs/**/*.js'])
		.pipe(plumber({ errorHandler: handleError }))
		// .pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
        .pipe(concat('main.js'))
		.pipe(uglify())
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('js-libs', function () {
	return gulp.src('./src/js/libs/**/*.js')
		.pipe(plumber({ errorHandler: handleError }))
		.pipe(concat('libs.js'))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('scss-libs', function () {
	return gulp.src('./src/scss/libs/**/*.css')
		.pipe(plumber({ errorHandler: handleError }))
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch', function () {
	gulp.watch(['src/scss/**/*.scss'], ['styles']);
	gulp.watch(['src/js/**/*.js'], ['scripts']);
	// gulp.watch('app/js/*.js').on("change", browserSync.reload);
});

gulp.task('default', ['watch']);
