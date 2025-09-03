// This runs in background, caches your assets
const CACHE_NAME = "gorillas-v1";
const ASSETS = [
  "/",
  "/style.css",
  "/src/main.js",
  "/ClashDisplay-Variable.ttf",
  "/Pally-Variable.ttf",
  "/src/smooth-scroll.js",
  "/backgrounds/Hero%20section.png",
  "/nfts/hero-section/Goldie.png",
  // Add your critical assets
];

// Install: Cache everything
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

// Fetch: Serve from cache first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
