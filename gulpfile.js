var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');
var fs = require('fs');
var path = require('path');
var extend = require('gulp-extend');
var sass = require('gulp-ruby-sass');
var handlebars = require('handlebars');
var rename = require('gulp-rename');

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

hbs.registerHelper('ifEq', function(a, b, block) {
    return a == b ? block.fn() : block.inverse();
});

gulp.task('markdown', function () {
    gulp.src('./lessons/**/*.md')
        .pipe(markdown({
            pedantic: true,
            smartypants: true
        }))
        .pipe(gulp.dest('./lessons'));
});

function genLessonJson(index, lesson, filepath, outname, last) {
    var js = "";
    try {
        var jspath = path.join(filepath, lesson.name + '.js');
        js = fs.readFileSync(jspath, 'utf8');
    } catch (err) {
        console.log(lesson.name + " has no starter code.");
    }

    // load text.
    var body = {};
    try {
        var bodypath = path.join(filepath, lesson.name + '.json');
        body = JSON.parse(fs.readFileSync(bodypath, 'utf8'));
    } catch (err) {
        body = {
            "title": lesson.name,
            "body": ""
        };
    }

    // load tester code.
    try {
        jstest = fs.readFileSync(path.join(filepath, lesson.name + '.test.js'), 'utf8');
    } catch (err) {
        jstest = fs.readFileSync(path.join(__dirname, "dist", "js", "notestcode.js"), 'utf8');
    }
    lesson.start_code = js;
    lesson.test_code = jstest;
    lesson.title = body.title;
    lesson.body = body.body;
    lesson.lesson_no = index;
    if (last !== "") {
        lesson.nextLesson = last;
    }
    fs.writeFileSync(path.join(__dirname, 'tmp', outname + '.json'), JSON.stringify(lesson), "utf8");

}

/**
 * This task compiles the lesson files into static html pages.
 **/
gulp.task('handlebars', ['markdown', 'compileLessons'], function () {
    var nav = handlebars.compile(fs.readFileSync(path.join(__dirname, "src", "partials", "nav.hbs"), "utf8"));
    hbs.registerPartial("nav", nav);
    gulp.src(['tmp/section-*-lesson-*.json', '!tmp/section.json'])
        .pipe(hbs('src/template.hbs'))
        .pipe(gulp.dest('dist'));

    // sectionS view.
    var sections = findDirs(path.resolve(__dirname, 'lessons'));
    var sectionData = {
        sections: []
    };
    sections.forEach(function (section) {
        var sectionPath = path.join(__dirname, 'lessons', section, 'section.json');
        var sectionJson = JSON.parse(fs.readFileSync(sectionPath));
        sectionData.sections.push({
            "name": sectionJson.name,
            "nameNice": sectionJson.nameNice,
            "description": sectionJson.descriptionShort ? sectionJson.descriptionShort : "No description available.",
            "noLessons": sectionJson.lessons.length
        });

        gulp.src(sectionPath)
            .pipe(hbs('src/section.hbs'))
            .pipe(rename('section-' + sectionJson.name + '.html'))
            .pipe(gulp.dest('dist'));
    });
    fs.writeFileSync(path.join(__dirname, 'tmp', 'sections.json'), JSON.stringify(sectionData), "utf8");
    gulp.src('tmp/sections.json')
        .pipe(hbs('src/sections.hbs'))
        .pipe(gulp.dest('dist'));
});


gulp.task('compileLessons', function () {
    var dirs = findDirs(path.resolve(__dirname, 'lessons'));

    dirs.reverse().forEach(function (dir) {
        var fullpath = path.join(__dirname, 'lessons', dir);
        if (fs.statSync(path.join(fullpath, 'section.json'))) {
            // get the json file.
            var sectionJson = JSON.parse(fs.readFileSync(path.join(fullpath, 'section.json')));
            // should we ignore it?
            if (sectionJson.hasOwnProperty('ignore') ? !sectionJson.ignore : true) {
                // Dear Javascript gods.
                // For what I am about to commit,
                // I apologise. Love from Matt.
                var lastLesson = "";
                sectionJson.lessons.reverse().forEach(function (lesson, index, array) {
                    var name = "section-" + sectionJson.name + "-lesson-" + lesson.name;
                    genLessonJson(array.length - index, lesson, fullpath, name, lastLesson);
                    lastLesson = name;
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
