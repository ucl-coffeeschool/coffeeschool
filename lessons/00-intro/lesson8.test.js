function codeTest() {
    var results = [];
    consoleOut.forEach(function (el, ind, arr) {
        if(/true/.test(el.toString().toLowerCase()))
            results.push(true);
        else
            results.push(false);
    });

    if (arraysEqual(results, [false, true, true, false, true, false])) {
        return "true";
    }
    else {
        return "false";
    }
}
