// Offline-Unterstützung: App-Dateien aus dem Cache, Fragen zuerst aus dem Netz.
const CACHE = "risale-lernstand-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "questions.json",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Fragen und Seite: Netz zuerst, damit neue Fragen sofort ankommen; offline aus dem Cache.
  if (url.origin === location.origin && (url.pathname.endsWith("questions.json") || req.mode === "navigate" || url.pathname.endsWith("index.html"))) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
    return;
  }

  // Übrige eigene Dateien und Schriften: Cache zuerst, im Hintergrund aktualisieren.
  if (url.origin === location.origin || url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
