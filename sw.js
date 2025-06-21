const GHPATH = '/FigmaPWA';
const CACHE = 'pwa-cache-v1';
const URLS = [ `${GHPATH}/`, `${GHPATH}/index.html`, `${GHPATH}/qr-generator.js`, `${GHPATH}/manifest.webmanifest`, `${GHPATH}/sw.js` ];

self.addEventListener('install', evt =>
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)))
);
self.addEventListener('fetch', evt =>
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)))
);
