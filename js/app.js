document.addEventListener("DOMContentLoaded", function () {
    CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
});
