document.addEventListener("mouseup", function(event) {
    var sel = window.getSelection();

    var range = sel.getRangeAt(0);
    rect = range.getBoundingClientRect();

    if (sel.toString().length) {
        $(document).tooltip();

        var div = document.createElement("div"); // make box
        div.style.border = "2px solid black"; // with outline
        div.style.position = "fixed"; // fixed positioning = easy mode
        div.style.top = rect.top + "px"; // set coordinates
        div.style.left = rect.left + "px"; // and size
        div.style.height = rect.height + "px";
        div.style.width = rect.width + "px";

        var att = document.createAttribute("title");
        att.value = "this is a tooltip";
        div.setAttributeNode(att);
        document.body.appendChild(div); // finally append

        console.log(rect, range, sel);
    }
});
