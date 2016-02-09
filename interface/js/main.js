var editor = ace.edit("codeEditor");

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

//Run the javascript
$('#code-compile').click(function() {
	Crafty.init(500, 350, document.getElementById("game-container"));
	eval(editor.getValue());
});






