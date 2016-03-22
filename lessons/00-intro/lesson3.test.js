function codeTest() {
    loggerdiv.innerHTML = '';
    consoleOut = [];
    eval(editor.getValue());
    return (typeof(animal) === 'string' && animal === 'dog' && consoleOut[0] === 'dog')? "true" : "false";
}
