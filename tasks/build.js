'use strict';

const gulp = require('gulp');

gulp.task('build', ['express:build'], function(){
    process.exit();
});

