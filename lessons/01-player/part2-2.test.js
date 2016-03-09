function codeTest() {
    var lc = editor.getValue().toLowerCase();
    if (/var\s+playervel\s*\=\s*0/.test(lc) && /var\s+g\s*\=\s*0\.5/.test(lc)) {
        return "true";
    }
    else {
        return "false";
    }
}
