// Optimized Service Worker for Some Gorillas Landing Page
const CACHE_NAME = "somegorillas-v2";
const CRITICAL_ASSETS = [
  "/",
  "/src/style.css",
  "/src/main-optimized.js",
  "/src/templates/app-template.html",
  "/ClashDisplay-Variable.ttf",
  "/Pally-Variable.ttf",
  "/backgrounds/Hero%20section.png",
  "/nfts/hero-section/Goldie.webp",
  "/Intersect.svg",
];

const BACKGROUND_SYNC_ASSETS = [
  "/backgrounds/Section%202.png",
  "/backgrounds/Section%203.png",
  "/backgrounds/Section%204.png",
  "/backgrounds/Section%205.png",
  "/backgrounds/Section%206.png",
  "/backgrounds/Section%207.png",
  "/nfts/hero-section/Gangsta.webp",
  "/nfts/hero-section/Zombie.webp",
  "/nfts/hero-section/Wild%20One.webp",
  "/nfts/hero-section/Lady.webp",
  "/nfts/hero-section/Kiddo.webp",
  "/nfts/hero-section/Sensei.webp",
  "/nfts/hero-section/Nun.webp",
  "/nfts/hero-section/Dude.webp",
];

// Install: Cache critical assets immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache critical assets first
      await cache.addAll(CRITICAL_ASSETS);
      
      // Cache background assets without blocking
      setTimeout(() => {
        BACKGROUND_SYNC_ASSETS.forEach(async (asset) => {
          try {
            await cache.add(asset);
          } catch (error) {
            console.log(`Failed to cache ${asset}:`, error);
          }
        });
      }, 100);
    })
  );
  self.skipWaiting();
});

// Activate: Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch: Cache-first strategy with network fallback
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;
  
  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version immediately
        // Update cache in background if it's been a while
        if (shouldUpdateCache(event.request)) {
          updateCacheInBackground(event.request);
        }
        return cachedResponse;
      }

      // Not in cache, fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache if not successful
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Cache successful responses
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch((error) => {
        console.log("Fetch failed:", error);
        // Could return a fallback page here
        throw error;
      });
    })
  );
});

function shouldUpdateCache(request) {
  // Update cache for HTML and critical assets every hour
  const criticalAssets = ["/", "/src/main-optimized.js", "/src/templates/app-template.html"];
  return criticalAssets.some(asset => request.url.includes(asset));
}

function updateCacheInBackground(request) {
  fetch(request).then((response) => {
    if (response.status === 200) {
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(request, response.clone());
      });
    }
  }).catch(() => {
    // Silently fail background updates
  });
}
