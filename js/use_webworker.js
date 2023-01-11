/********************
 * USE A WEB WORKER *
 ********************/
const version = '0.20'

function goTo(page) {
    let versionForURL = version.replace('.', '-');
    parent.location.href = page + '.html?version=' + versionForURL;
}

function zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if ( viewport ) {
        viewport.content = "initial-scale=0.1";
        viewport.content = "width=1200";
    }
}

new Worker("/js/webworker.js");


