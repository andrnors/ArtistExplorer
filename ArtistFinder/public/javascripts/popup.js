function popupWindow(url, width, height) {
    var left_pos = (window.screen.width / 2) - ((width / 2) + 10);
    var top_pos = (window.screen.height / 2) - ((height / 2) + 10);
    window.open(url, "Feed", "status=no,height=" + height + ",width=" + width +
        ",resizable=yes,left=" + left_pos + ",top=" + top_pos + ",screenX=" + left_pos + ",screenY=" + top_pos + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");

}

