function codeTest() {
    var returnVal = "false";
    consoleOut.forEach(function(el, ind, arr) {
        if (/hello world/.test(el)) {
            returnVal = "true";
        }
    })
    return returnVal;
}
