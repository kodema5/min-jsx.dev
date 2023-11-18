// https://googlechrome.github.io/samples/service-worker/basic/
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers

let VERSION = "v1"
let CACHE_NAME = `precache-${VERSION}`
let RUNTIME = 'runtime'

let CACHE_URLS = [
    './',
    'index.html',
    './app.js',
    './resources/bootstrap.min.css',
    './resources/material-symbols-outlined.css',
    './resources/material-symbols-outlined.woff2',
    './resources/react.production.min.js',
    './resources/react-dom.production.min.js',
    './resources/react-bootstrap.min.js'
]


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(c => c.addAll(CACHE_URLS))
        .then(self.skipWaiting())
    )
})


self.addEventListener('activate', event => {
    let cacheNames = [CACHE_NAME, RUNTIME]
    event.waitUntil(
        caches.keys()
        .then(names => names.filter(n => !cacheNames.includes(n)))
        .then(cachesToDelete => Promise.all(
            cachesToDelete.map(a => caches.delete(a))))
        .then(() => self.clients.claim())
    )
})


// if fetch of data, storages can be better alternatives?
//
self.addEventListener('fetch', event => {
    let isToCache = event.request.url.startsWith(self.location.origin)
    if (!isToCache) return

    event.respondWith(
        caches
        .match(event.request)
        .then(cached => cached
            || caches
                .open(RUNTIME)
                .then(cache =>
                    fetch(event.request)
                    .then(res =>
                        cache
                        .put(event.request, res.clone())
                        .then(() => res)
                    )))
    )
})