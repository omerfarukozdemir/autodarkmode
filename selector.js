var hr = (new Date()).getHours(); //0-23

var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");

js.type = "text/javascript";
js.src = hr > 6 && hr < 21 ? "js/bootstrap.min.js" : "js/bootstrap.dark.min.js";
head.appendChild(js);

var lnk = document.createElement('link');
lnk.type = 'text/css';
lnk.href = hr > 6 && hr < 21 ? 'css/bootstrap.min.css' : 'css/bootstrap.dark.min.css';
lnk.rel = 'stylesheet';
var selectorJs = document.querySelector('[src$="selector.js"]');
selectorJs.parentNode.insertBefore(lnk, selectorJs);
