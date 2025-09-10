import "./style.css";
import "./style-optimizations.css";
import { lenis } from "./smooth-scroll.js";
import { createLoader, hideLoader, preloadAssets } from "./loader.js";
import { initializeAppWithTemplate } from "./components/template-loader.js";
import { setupMouthHover, setupFAQEventListeners, setupDraggableNFTs } from "./components/interactions.js";
import { setupTranslator } from "./components/translator.js";
import { initHeroAnimations, createParticleEffect } from "./components/hero-animations.js";

function addScrollOptimizations() {
  // Just add GPU acceleration without disabling effects
  const heavyElements = document.querySelectorAll('.backdrop-blur-md, [style*="background: radial-gradient"], .apes');
  heavyElements.forEach(el => {
    el.style.transform = 'translateZ(0)';
    el.style.willChange = 'transform';
  });
}

// Register service worker with better error handling
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(registration => {
      console.log("[Main] Service Worker registered successfully:", registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log("[Main] New SW installed, prompting user to refresh");
            // Could show a notification to user here
          }
        });
      });
    })
    .catch(error => {
      console.error("[Main] Service worker registration failed:", error);
    });
}

// Cache disabled temporarily
async function checkCacheStatus() {
  return false; // Always return false to show loader
}

// Main initialization function
async function initApp() {
  const isCached = await checkCacheStatus();

  if (isCached) {
    console.log("Assets cached, skipping loader");
    initializeApp();
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
      setTimeout(() => {
        hideLoader();
        initializeApp();
      }, 300);
    }
  }
}

// Initialize the main application
function initializeApp() {
  // Start smooth scroll
  lenis.start();

  // Load and render template
  const templateLoaded = initializeAppWithTemplate("#app");
  
  if (!templateLoaded) {
    console.error("Failed to load app template");
    return;
  }

  // Initialize interactive components after template is loaded
  setTimeout(() => {
    // Initialize hero animations first (most important)
    initHeroAnimations();
    
    // Then other interactions
    setupMouthHover();
    setupFAQEventListeners();
    setupDraggableNFTs();
    setupTranslator();
    
    // Add scroll performance optimizations
    addScrollOptimizations();
  }, 100);

  console.log("App initialization complete");
  
  // Cache debug disabled
}

// Cache debug function disabled

// Start the application
initApp().catch(error => {
  console.error("App initialization failed:", error);
});