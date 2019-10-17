document.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();

    // var range = sel.getRangeAt(0);
    // rect = range.getBoundingClientRect();

    if (sel.toString().length) {
        $(document).selectionSharer();
    }
});
