// https://googlechrome.github.io/samples/service-worker/basic/
//

let PRECACHE = 'precache-v1'
let RUNTIME = 'runtime'
let PRECACHE_URLS = [
    'index.html',
    './resources/bootstrap.min.css',
    './resources/material-symbols-outlined.css',
    './resources/material-symbols-outlined.woff2',
    './resources/react.production.min.js',
    './resources/react-dom.production.min.js',
    './resources/react-bootstrap.min.js'
]


self.addEventListener('install', event => {
    event.awaitUntil(
        caches.open(PRECACHE)
        .then(c => c.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    )
})


self.addEventListener('activate', event => {
    let ns = [PRECACHE, RUNTIME]
    event.awaitUntil(
        caches.keys()
        .then(names => names.filter(n => !ns.includes(n)))
        .then(cachesToDelete => Promise.all(
            cachesToDelete.map(a => caches.delete(a))))
        .then(() => self.clients.claim())
    )
})


// if fetch of data, storages can be better alternatives
//
// self.addEventListener('fetch', event => {
//     let isToCache = event.request.url.startsWith(self.location.origin)
//     if (!isToCache) return

//     event.respondWith(
//         caches.match(event.request)
//         .then(cached => cached
//             || caches.open(RUNTIME)
//                 .then(cache =>
//                     fetch(event.request)
//                     .then(res =>
//                         cache.put(event.request, res.clone())
//                         .then(() => res)
//                     )))
//     )
// })