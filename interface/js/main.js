$(document).ready(function() {
    var editor = ace.edit("codeEditor");
    editor.setTheme("ace/theme/cobalt");
    editor.getSession().setMode("ace/mode/javascript");
    resizeCanvas();
});

// Triggers on resize.
$(window).resize(function() {
    resizeCanvas();
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
