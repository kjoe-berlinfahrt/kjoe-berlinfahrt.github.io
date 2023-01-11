/******************
 * SERVICE WORKER *
 ******************/
const appName = 'lll-wochenende'
const version = '0.18'
const cacheName = appName + '-cache-v' + version;
const filesToCache = [
    'img/luxemburg_icon_iphone.png',
    'img/luxemburg_icon_48.png',
    'img/luxemburg_icon_72.png',
    'img/luxemburg_icon_96.png',
    'img/luxemburg_icon_144.png',
    'img/luxemburg_icon.png',
    'index.html',
    'free-time.html',
    'hardfacts.html',
    'saturday.html',
    'sunday.html',
    'tips.html',
    'train.html',
    'conference.html',
    'css/style.css',
    'js/use_webworker.js',
    'js/use_serviceworker.js',
    'js/webworker.js',
    'js/main.js'
];

// Install the service worker asynchronously, which then actually caches all the files contained in the above list
// NOTE: Cache only the files that do not change every time
// When registration is complete (see use_serviceworker.js file), the serviceworker.js file is automatically downloaded,
//   then installed, and finally activated.
// In the install listener, we initialize the cache and add files to the cache for offline use.
// @waituntil(): 	The service worker does not install until the code inside waitUntil is executed.
// The code inside "then" will be run, asynchronously
// @caches: Caches is a special CacheStorage object available in the scope of the given Service Worker to enable saving data
//					Saving to web storage won't work, because web storage is synchronous.
//					We open a cache with a given name, then add all the files our app uses to the cache, so they can be downloaded
//          next time (identified by request URL).
self.addEventListener("install", event => {
    console.log("Service Worker 'LLL-Wochenende-PWA' installing.");
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// This event is usually used to delete any files that are no longer necessary and clean up after the app in general.
self.addEventListener("activate", event => {
    console.log("Service Worker 'LLL-Wochenende-PWA' activating.");
});

// The service worker fetches content from the cache if it is available there, providing offline functionality
// @RespondWith:  It works as a virtual proxy server between the app and the network.
//					      Allows to respond to every single request with any response we want: prepared by the Service Worker,
//                taken from cache, modified if needed.
self.addEventListener('fetch', event => {
    console.log("Service Worker 'LLL-Wochenende-PWA' fetching.");
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

