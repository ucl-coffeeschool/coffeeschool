var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');
var fs = require('fs');
var extend = require('gulp-extend');

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
                var jsonFile = fs.readFileSync("./lessons/lesson"+file.match(/\d+/)+".json",'utf8');
                var json = JSON.parse(jsonFile);
                json.start_code = js;
                //fs.appendFileSync("./lessons/"+file.match(/lesson(\d)+/)+".json",',{"start_code": "'+escape(s)+'"}');
                fs.writeFileSync("./lessons/lesson"+file.match(/\d+/)+".json",JSON.stringify(json),"utf8");
            }
        });
    });
});

gulp.task('handlebars', ['markdown', 'js'], function() {
    //fs.readdir('./lessons',function(err,files) {
    //    files.forEach(function(file,i,arr) {
    //        if (file.match(/lesson(\d)+\.json$/)) {
    //            var i = file.match(/(\d)+/);
    //            gulp.src(['./lessons/lesson'+i+'.json','./lessons/lesson'+i+'.js.json'])
    //                .pipe(extend('./lessons/lesson'+i+'.json'))
    //                .pipe(hbs('./interface/template.hbs'))
    //                .pipe(gulp.dest('./interface'));
    //        }
    //    });
    //})

    gulp.src(['lessons/*.json','!lessons/*.js.json'])
        .pipe(hbs('./interface/template.hbs'))
        .pipe(gulp.dest('interface'));
});
