import "./style.css";
import { lenis } from "./smooth-scroll.js";
import { createLoader, hideLoader, preloadAssets } from "./loader.js";
import { initializeAppWithTemplate } from "./components/template-loader.js";
import { setupMouthHover, setupFAQEventListeners, setupDraggableNFTs } from "./components/interactions.js";
import { setupTranslator } from "./components/translator.js";

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log("Service worker registration failed:", error);
  });
}

// Cache status check
function checkCacheStatus() {
  return caches
    .match("/backgrounds/Hero%20section.png")
    .then((response) => !!response);
}

// Main initialization function
async function initApp() {
  const isCached = await checkCacheStatus();

  if (isCached) {
    console.log("Assets cached, skipping loader");
    await initializeApp();
  } else {
    console.log("First visit, showing loader");
    runLoaderSequence();
  }
}

// Loader sequence
function runLoaderSequence() {
  const loaderTimeline = createLoader();
  let assetsLoaded = false;
  let loaderComplete = false;

  // Start preloading assets
  preloadAssets(
    (progress) => {
      console.log(`Loading progress: ${progress}%`);
    },
    () => {
      assetsLoaded = true;
      checkAndInitialize();
    },
  );

  // Wait for loader animation
  loaderTimeline.eventCallback("onComplete", () => {
    loaderComplete = true;
    checkAndInitialize();
  });

  function checkAndInitialize() {
    if (assetsLoaded && loaderComplete) {
      setTimeout(async () => {
        hideLoader();
        await initializeApp();
      }, 300);
    }
  }
}

// Initialize the main application
async function initializeApp() {
  // Start smooth scroll
  lenis.start();

  // Load and render template
  const templateLoaded = await initializeAppWithTemplate("#app");
  
  if (!templateLoaded) {
    console.error("Failed to load app template");
    return;
  }

  // Initialize interactive components after template is loaded
  setTimeout(() => {
    setupMouthHover();
    setupFAQEventListeners();
    setupDraggableNFTs();
    setupTranslator();
  }, 100);

  console.log("App initialization complete");
}

// Start the application
initApp().catch(error => {
  console.error("App initialization failed:", error);
});