var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');

gulp.task('markdown', function() {
    gulp.src('./lessons/*.md')
        .pipe(markdown({
            pedantic: true,
            smartypants: true
        }))
        .pipe(gulp.dest('./lessons'));
});

gulp.task('handlebars', ['markdown'], function() {
    gulp.src('./lessons/*.json')
        .pipe(hbs('./interface/template.hbs'))
        .pipe(gulp.dest('interface'));
});
