// var contextMenuItem = {
//     id: "Tweet",
//     title: "Tweet",
//     contexts: ["selection"]
// };

// chrome.contextMenus.create(contextMenuItem);

// chrome.contextMenus.onClicked.addListener(function(clickData) {
//     if (clickData.menuItemId == "Tweet" && clickData.selectionText) {
//         alert(currentURL);
//     }
// });

// chrome.tabs.query(
//     { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
//     function(tabs) {
//         getCurrentURL(tabs[0].url);
//     }
// );

// function getCurrentURL(tab) {
//     currentURL = tab;
// }

// function getSelected() {
//     currentURL = null;
//     if (window.getSelection) {
//         console.log(window.selection);
//         return window.getSelection();
//     } else if (document.getSelection) {
//         return document.getSelection();
//     } else {
//         var selection = document.selection && document.selection.createRange();
//         if (selection.text) {
//             return selection.text;
//         }
//         return false;
//     }
//     return false;
// }
