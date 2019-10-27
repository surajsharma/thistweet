window.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();
    if (sel.toString().length) {
        // $(document).selectionSharer();
        console.log(sel.toString());
        window.open("http://localhost:3101/image/" + sel + "/ok");
    }
});
