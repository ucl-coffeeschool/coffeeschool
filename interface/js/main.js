$(document).ready(function() {
    var editor = ace.edit("codeEditor");
    editor.setTheme("ace/theme/cobalt");
    editor.getSession().setMode("ace/mode/javascript");
});

// toggles the menu.
$('#menu-button').click(function() {
    $('nav').toggleClass('active');
    $('.main').toggleClass('active');
});
