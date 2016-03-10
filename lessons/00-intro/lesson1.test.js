function codeTest() {
    var returnVal = "false";
    consoleOut.forEach(function (el, ind, arr) {
        if (el === "Hello World!")
        {
            returnVal = "true";
        }
    });
    return returnVal;
}
