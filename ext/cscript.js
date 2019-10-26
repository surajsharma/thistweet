window.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();
    if (sel.toString().length) {
        // $(document).selectionSharer();
        alert(sel);
    }
});
