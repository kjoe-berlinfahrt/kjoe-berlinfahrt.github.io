/********************
 * USE A WEB WORKER *
 ********************/
const version = '0.12'

function goTo(page) {
    let versionForURL = version.replace('.', '-');
    parent.location.href = page + '.html?version=' + versionForURL;
}

new Worker("/js/webworker.js");


