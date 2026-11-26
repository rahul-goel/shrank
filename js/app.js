document.addEventListener("DOMContentLoaded", function () {
    var bibtex = document.getElementById("bibtex");
    if (bibtex) {
        CodeMirror.fromTextArea(bibtex, {
            lineNumbers: false,
            lineWrapping: true,
            readOnly: true
        });
    }
});
