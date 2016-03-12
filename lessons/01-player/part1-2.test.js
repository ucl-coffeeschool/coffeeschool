function codeTest() {
    var children = $('#game-container div').children();
    if (children) {
        if ($(children[0]).css('background-color') === 'rgb(255, 0, 0)') {
            return "true";
        }
        else {
            return "false";
        }
    }
    else {
        return "false";
    }
}
