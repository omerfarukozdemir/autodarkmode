var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");

js.type = "text/javascript";

var hr = (new Date()).getHours(); //0-23

if (hr > 6 && hr < 21) {
    //day mode
    js.src = "js/bootstrap.min.js";

    var lnk = document.createElement('link');
    lnk.type = 'text/css';
    lnk.href = 'css/bootstrap.min.css';
    lnk.rel = 'stylesheet';
    var highlight = document.querySelector('[src$="selector.js"]');
    highlight.parentNode.insertBefore(lnk, highlight);
} else {
    //dark mode
    js.src = "js/bootstrap.dark.min.js";

    var lnk = document.createElement('link');
    lnk.type = 'text/css';
    lnk.href = 'css/bootstrap.dark.min.css';
    lnk.rel = 'stylesheet';
    var highlight = document.querySelector('[src$="selector.js"]');
    highlight.parentNode.insertBefore(lnk, highlight);
}

head.appendChild(js);