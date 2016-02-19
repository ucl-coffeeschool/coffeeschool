var editor = ace.edit("codeEditor");

var consoleOut = [];

$(document).ready(function() {
    editor.getSession().setMode("ace/mode/javascript");
    resizeCanvas();
});

// check for syntax errors.
editor.getSession().on("changeAnnotation", function() {
    var annot = editor.getSession().getAnnotations();
    var isError = false;

    for (var key in annot) {
        if (annot.hasOwnProperty(key)) {
            if (annot[key].type === "error") {
                isError = true;
            }
        }
    }

    if (isError) {
        $('#code-compile').prop('disabled',true);
        $('#syntax-msg').html('You have errors in your code!');
    }
    else {
        $('#code-compile').prop('disabled',false);
        $('#syntax-msg').html('');
    }
})

// Triggers on resize.
$(window).resize(function() {
    resizeCanvas();
    editor.resize();
});

var setMenuButtonIcon = function() {
    $('#menu-button i').toggleClass('fa-bars');
    $('#menu-button i').toggleClass('fa-close');
};


// toggles the menu.
$('#menu-button').click(function() {
    $('nav').toggleClass('active');
    $('.main').toggleClass('active');
    setMenuButtonIcon();
});

$('.container,footer,header h1,nav a').click(function() {
    if ($('nav').hasClass('active')) {
        $('nav').removeClass('active');
        $('.main').removeClass('active');
        setMenuButtonIcon();
    }
});

function resizeCanvas(){
    var con = $("#game-container"),
    canvas = $("#game-preview")[0],
    aspect = canvas.height/canvas.width,
    width = con.width(),
    height = con.height();
    canvas.height = height;
    canvas.width = Math.round(height / aspect);
    if (canvas.width > width) {
        canvas.width = width;
        canvas.height = Math.round(width * aspect);
    }
}

var nextLesson = function() {
    var currLesson = location.href.match(/lesson\d+/)[0].match(/\d+/);
    location = 'lesson'+(parseInt(currLesson)+1)+".html";
}

//Run the javascript
$('#code-compile').click(function() {
	loggerdiv.innerHTML = '';
    $('#game-container').html("");
    consoleOut = [];
	Crafty.init(300, 150, document.getElementById("game-container"));
	eval(editor.getValue());
    
    $('#nextLesson').addClass('lessonComplete');
    $('#nextLesson i').removeClass('fa-arrow-right').addClass('fa-spin fa-spinner');
    $('#nextLesson').onClick(nextLesson());
    $('#nextLesson').prop('disabled',true);

    setTimeout(function() {
        switch (codeTest()) {
            case "true":
                $('#nextLesson i').removeClass('fa-spin fa-spinner').addClass('fa-arrow-right');
                $('#nextLesson').prop('disabled',false);
                break;
            case "notest":
                $('#nextLesson i').removeClass('fa-spin fa-spinner').addClass('fa-arrow-right');
                $('#nextLesson').prop('disabled',false);
                break;
            case "false":
                $('#nextLesson').removeClass('lessonComplete');
                break;
        }
    }, 2000);
});

//overlay stuff
$('.overlay').click(function() {
    $('.overlay').fadeOut(500);
})

//overide console.log
var loggerdiv = document.getElementById("log-div");
console.log = function (message) {
	loggerdiv.innerHTML += "<p>" + message + '</p>';
    if (message !== "") {
        consoleOut.push(message);
    }
    $('#log-div').children().each(function(ind) {
        if ($(this).html() === "") {
            $(this).remove();
        }
    });
};




