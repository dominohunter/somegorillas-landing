// Production-ready Service Worker optimized for Vercel
const CACHE_VERSION = "v4.1";
const CACHE_NAME = `somegorillas-${CACHE_VERSION}`;
const STATIC_CACHE = `somegorillas-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `somegorillas-runtime-${CACHE_VERSION}`;

// Critical assets - cache immediately on install
const CRITICAL_ASSETS = [
  "/",
  "/ClashDisplay-Variable.ttf",
  "/Pally-Variable.ttf",
  "/vite.svg",
  "/arrow-right.png",
  "/Intersect.svg",
];

// Hero section assets - high priority
const HERO_ASSETS = [
  "/backgrounds/Hero%20section.png",
  "/nfts/hero-section/Goldie.webp",
  "/nfts/hero-section/Gangsta.webp",
  "/nfts/hero-section/Zombie.webp",
  "/nfts/hero-section/Wild%20One.webp",
  "/nfts/hero-section/Lady.webp",
  "/nfts/hero-section/Kiddo.webp",
  "/nfts/hero-section/Sensei.webp",
  "/nfts/hero-section/Nun.webp",
  "/nfts/hero-section/Dude.webp",
];

// Other section backgrounds - cache on demand
const SECTION_ASSETS = [
  "/backgrounds/Section%202.png",
  "/backgrounds/Section%203.png",
  "/backgrounds/Section%204.png",
  "/backgrounds/Section%205.png",
  "/backgrounds/Section%206.png",
  "/backgrounds/Section%207.png",
  "/nfts/section-2/Closed%20mouth.png",
  "/nfts/section-2/Open%20Mouth.png",
  "/nfts/section-3.png",
  "/nfts/section-4/1.png",
  "/nfts/section-4/2.png",
  "/nfts/section-4/3.png",
  "/nfts/section-4/4.png",
  "/nfts/section-4/5.png",
  "/nfts/section-4/6.png",
  "/nfts/section-4/7.png",
  "/nfts/section-4/8.png",
  "/section3/section-3.png",
  "/flip-coin.png",
  "/mouth-closed.png",
  "/mouth-opened.png",
  "/Teacher.png",
  "/banana-throw.gif",
  "/NFT.png",
  "/Twitter.svg",
  "/discord.svg",
  "/doc.svg",
  "/up-right.svg",
];

// Install: Caching disabled temporarily
self.addEventListener("install", (event) => {
  console.log("[SW] Installing... (caching disabled)");
  self.skipWaiting();
});

// Background caching for non-critical assets
function cacheOtherAssets() {
  caches.open(RUNTIME_CACHE).then(cache => {
    console.log("[SW] Caching section assets in background");
    SECTION_ASSETS.forEach(asset => {
      cache.add(asset).catch(err => {
        console.warn(`[SW] Failed to cache ${asset}:`, err);
      });
    });
  });
}

// Activate: Clear all caches temporarily
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating... (clearing all caches)");
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName.startsWith('somegorillas-') || cacheName.startsWith('gorillas-')
          )
          .map(cacheName => {
            console.log("[SW] Deleting cache:", cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log("[SW] All caches cleared, activation complete");
    })
  );
  
  self.clients.claim();
});

// Fetch: Caching disabled - pass through all requests
self.addEventListener("fetch", (event) => {
  // Just pass through all requests without caching
  return;
});

// Cache-first strategy for static assets
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone()).catch(err => {
        console.warn("[SW] Failed to cache:", request.url, err);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.error("[SW] Cache-first failed:", request.url, error);
    throw error;
  }
}

// Cache-first with fallback for images
async function cacheFirstWithFallback(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone()).catch(err => {
        console.warn("[SW] Failed to cache image:", request.url, err);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.error("[SW] Image fetch failed:", request.url, error);
    // Could return a placeholder image here
    throw error;
  }
}

// Network-first for HTML (with cache fallback)
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone()).catch(err => {
        console.warn("[SW] Failed to cache HTML:", request.url, err);
      });
    }
    return networkResponse;
  } catch (error) {
    console.warn("[SW] Network failed, trying cache:", request.url);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Helper functions
function isStaticAsset(pathname) {
  return /\.(js|css|woff2?|ttf|svg)$/i.test(pathname);
}

function isImageAsset(pathname) {
  return /\.(png|jpg|jpeg|webp|gif|ico)$/i.test(pathname);
}

function isHTMLRequest(request) {
  return request.headers.get('accept')?.includes('text/html');
}

// Message handling for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    getCacheStatus().then(status => {
      event.ports[0].postMessage(status);
    });
  }
});

// Verify critical assets are properly cached
async function verifyCriticalAssets() {
  try {
    const staticCache = await caches.open(STATIC_CACHE);
    const runtimeCache = await caches.open(RUNTIME_CACHE);
    
    const criticalChecks = await Promise.all([
      ...CRITICAL_ASSETS.map(asset => staticCache.match(asset)),
      ...HERO_ASSETS.slice(0, 3).map(asset => runtimeCache.match(asset))
    ]);
    
    const cachedCount = criticalChecks.filter(response => response).length;
    const totalCritical = CRITICAL_ASSETS.length + 3;
    
    console.log(`[SW] Critical assets cached: ${cachedCount}/${totalCritical}`);
    
    if (cachedCount < totalCritical * 0.8) {
      console.warn("[SW] Insufficient critical assets cached, retrying...");
      // Retry caching critical assets
      setTimeout(() => {
        Promise.allSettled([
          staticCache.addAll(CRITICAL_ASSETS),
          ...HERO_ASSETS.slice(0, 3).map(asset => runtimeCache.add(asset))
        ]);
      }, 1000);
    }
    
    return cachedCount >= totalCritical * 0.8;
  } catch (error) {
    console.error("[SW] Critical asset verification failed:", error);
    return false;
  }
}

async function getCacheStatus() {
  const cacheNames = await caches.keys();
  const sizes = await Promise.all(
    cacheNames.map(async name => {
      const cache = await caches.open(name);
      const keys = await cache.keys();
      return { name, size: keys.length };
    })
  );
  
  return {
    caches: sizes,
    total: sizes.reduce((sum, cache) => sum + cache.size, 0),
    criticalAssetsCached: await verifyCriticalAssets()
  };
}
