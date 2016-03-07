var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');
var fs = require('fs');
var path = require('path');
var extend = require('gulp-extend');
var sass = require('gulp-ruby-sass');

function findDirs(dirpath) {
    return fs.readdirSync(dirpath).filter(function (file) {
        return fs.statSync(path.join(dirpath, file)).isDirectory();
    });
}

hbs.registerHelper("math", function (lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

// gulp.task('markdown', function() {
//     gulp.src('./lessons/*.md')
//         .pipe(markdown({
//             pedantic: true,
//             smartypants: true
//         }))
//         .pipe(gulp.dest('./lessons'));
// });
//
function genLessonJson(lesson, filepath, outname) {
    var js = "";
    try {
        var jspath = path.join(filepath, lesson.name + '.js');
        js = fs.readFileSync(jspath, 'utf8');
    }
    catch (err) {
        console.log(lesson.name + " has no starter code.");
    }
    // load tester code.
    try {
        jstest = fs.readFileSync(path.join(filepath, lesson.name + '.test.js'), 'utf8');
    } catch (err) {
        jstest = fs.readFileSync(path.join(__dirname, "dist", "js", "notestcode.js"), 'utf8');
    }
    lesson.start_code = js;
    lesson.test_code = jstest;
    fs.writeFileSync(path.join(__dirname, 'dist', outname + '.json'), JSON.stringify(lesson), "utf8");
}
//
// /**
//  * This task compiles the lesson files into static html pages.
//  **/
// gulp.task('handlebars', ['markdown', 'js'], function() {
//     gulp.src(['lessons/*.json', '!lessons/*.js.json'])
//         .pipe(hbs('interface/template.hbs'))
//         .pipe(gulp.dest('interface'));
// });


gulp.task('compileLessons', function () {
    var dirs = findDirs(path.resolve(__dirname, 'lessons'));
    dirs.forEach(function (dir) {
        var fullpath = path.join(__dirname, 'lessons', dir);
        if (fs.statSync(path.join(fullpath, 'section.json'))) {
            // get the json file.
            var sectionJson = JSON.parse(fs.readFileSync(path.join(fullpath, 'section.json')));
            // should we ignore it?
            if (sectionJson.hasOwnProperty('ignore') ? !sectionJson.ignore : true) {
                sectionJson.lessons.forEach(function (lesson) {
                    name = "section-" + dir + "-lesson-" + lesson.name;

                    genLessonJson(lesson, fullpath, name);
                });
            }
        }
    });
});

/**
 * This tasks precompiles the Sass stylesheet into a CSS file.
 **/
gulp.task('sass', function () {
    return sass('src/css/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css'));
});


/**
 * Default task. Will watch the handlebars template and the scss file for changes and run tasks above as needed.
 **/
gulp.task('default', function () {
    gulp.watch('interface/template.hbs', ['handlebars']);
    gulp.watch('interface/css/*.scss', ['sass']);
});
