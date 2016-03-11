function codeTest() {
    var returnVal = "false";
    consoleOut.forEach(function (el, ind, arr) {
        if (el === 42) {
            returnVal = "true";
        }
        
    });
    return returnVal;
}
