function codeTest() {
    var returnVal = "false";
    consoleOut.forEach(function (el, ind, arr) {
        if (/^hello.*/.test(el.toLowerCase())) {
            returnVal = "true";
        }
    });
    return returnVal;
}
