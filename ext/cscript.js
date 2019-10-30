window.addEventListener('mouseup', function(event) {
  var sel = window.getSelection();
  if (
    sel.toString().length <= 1000 &&
    sel.toString().length > 100
  ) {
    console.log(sel.toString(), window.location.href);
    window.open(
      'http://localhost:3101/image?&text=' +
        encodeURIComponent(sel) +
        '&source=' +
        encodeURIComponent(window.location.href),
    );
  }
});
