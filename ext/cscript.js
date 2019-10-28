window.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();
    if (sel.toString().length && sel.toString().length <= 1000) {
        console.log(sel.toString(), window.location.href);
        window.open(
            "http://localhost:3101/image?&text=" +
                sel +
                "&source=" +
                window.location.href
        );
    }
});
