// var express = require('express');
// var path = require('path');
// var app = express();
// var bodyParser = require("body-parser");
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');

gulp.task('connect', function () {
	connect.server({
		root: 'app',
		port: 4000
	})
});

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

// gulp.task('browserify', function() {
// 	// Grabs the app.js file
//     return browserify('./node_modules/which-country/index.js')
//     	// bundles it and creates a file called bundle.js
//         .bundle()
//         .pipe(source('bundle.js'))
//         // saves it the public/js/ directory
//         .pipe(gulp.dest('./public/javascript/'));
// });