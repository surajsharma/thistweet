var contextMenuItem = {
    id: "Tweet",
    title: "Tweet",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "Tweet" && clickData.selectionText) {
        alert(clickData.selectionText);
    }
});

function getSelected() {
    if (window.getSelection) {
        console.log(window.selection);
        return window.getSelection();
    } else if (document.getSelection) {
        return document.getSelection();
    } else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
            return selection.text;
        }
        return false;
    }
    return false;
}
