function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function codeTest() {
    var results = [];
    consoleOut.forEach(function (el, ind, arr) {
        if(/true/.test(el.toLowerCase()))
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
