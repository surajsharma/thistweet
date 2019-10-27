window.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();
    if (sel.toString().length) {
        console.log(sel.toString(), window.location.href);
        window.open(
            "http://localhost:3101/image?&text=" +
                sel +
                "&source=" +
                window.location.href
        );
    }
});
