/********************
 * USE A WEB WORKER *
 ********************/

function goTo(page) {
    let versionForURL = version.replace('.', '-');
    parent.location.href = page + 'html?version=' + versionForURL;
}

new Worker("/js/webworker.js");


