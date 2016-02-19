var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');
var fs = require('fs');
var extend = require('gulp-extend');
var sass = require('gulp-ruby-sass');

gulp.task('markdown', function() {
    gulp.src('./lessons/*.md')
        .pipe(markdown({
            pedantic: true,
            smartypants: true
        }))
        .pipe(gulp.dest('./lessons'));
});

gulp.task('js', function() {
    fs.readdir('./lessons',function(err, files) {
        files.forEach( function (file,i,arr) {
            if(file.match(/lesson(\d)+\.js$/)) {
                var js = fs.readFileSync('./lessons/' + file,'utf8');
                var id = file.match(/\d+/);
                var jstest = "";
                // load tester code.
                try {
                    jstest = fs.readFileSync('./lessons/lesson'+id+'.test.js','utf8');
                }
                catch (err) {
                    jstest = fs.readFileSync('./interface/js/notestcode.js', 'utf8');
                }
                var jsonFile = fs.readFileSync("./lessons/lesson"+id+".json",'utf8');
                var json = JSON.parse(jsonFile);
                json.start_code = js;
                json.test_code = jstest;
                fs.writeFileSync("./lessons/lesson"+id+".json",JSON.stringify(json),"utf8");
            }
        });
    });
});

/**
 * This task compiles the lesson files into static html pages.
 **/
gulp.task('handlebars', ['markdown', 'js'], function() {
    gulp.src(['lessons/*.json','!lessons/*.js.json'])
        .pipe(hbs('interface/template.hbs'))
        .pipe(gulp.dest('interface'));
});


/**
 * This tasks precompiles the Sass stylesheet into a CSS file.
 **/
gulp.task('sass', function() {
    return sass('interface/css/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('interface/css'));
})


/**
 * Default task. Will watch the handlebars template and the scss file for changes and run tasks above as needed.
 **/
gulp.task('default', function() {
    gulp.watch('interface/template.hbs', ['handlebars']);
    gulp.watch('interface/css/*.scss', ['sass']);
})
