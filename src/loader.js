import gsap from "gsap";

// Register ScrambleText plugin (loaded via CDN in index.html)
gsap.registerPlugin(window.ScrambleTextPlugin);

// List of assets to preload
const assetsToLoad = [
  "/backgrounds/Hero section.png",
  "/backgrounds/Section 2.png",
  "/backgrounds/Section 3.png",
  "/backgrounds/Section 4.png",
  "/backgrounds/Section 5.png",
  "/nfts/hero-section/Dude.png",
  "/nfts/hero-section/Gangsta.png",
  "/nfts/hero-section/Goldie.png",
  "/nfts/hero-section/Kiddo.png",
  "/nfts/hero-section/Lady.png",
  "/nfts/hero-section/Nun.png",
  "/nfts/hero-section/Sensei.png",
  "/nfts/hero-section/Wild One.png",
  "/nfts/hero-section/Zombie.png",
  "/nfts/section-2/Closed mouth.png",
  "/nfts/section-2/Open Mouth.png",
  "/nfts/section-3.png",
  "/nfts/section-4/1.png",
  "/nfts/section-4/2.png",
  "/nfts/section-4/3.png",
  "/nfts/section-4/4.png",
  "/nfts/section-4/5.png",
  "/nfts/section-4/6.png",
  "/nfts/section-4/7.png",
  "/nfts/section-4/8.png",
  "/section-3.png",
];

export function preloadAssets(onProgress, onComplete) {
  let loadedCount = 0;
  const totalAssets = assetsToLoad.length;

  if (totalAssets === 0) {
    onComplete();
    return;
  }

  assetsToLoad.forEach((assetPath) => {
    const img = new Image();

    const handleLoad = () => {
      loadedCount++;
      const progress = (loadedCount / totalAssets) * 100;
      onProgress(progress);

      if (loadedCount === totalAssets) {
        onComplete();
      }
    };

    img.onload = handleLoad;
    img.onerror = handleLoad; // Still count failed loads to prevent hanging
    img.src = assetPath;
  });
}

export function createLoader() {
  const loaderHTML = `
    <div id="loader" style="background-image: url('/backgrounds/Hero%20section.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" >
      <div class="relative">
        <!-- SVG Loader with progress fill -->
        <div class="fixed inset-0">
          <svg
            class="w-full h-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="svgMask">
                <rect width="100%" height="100%" fill="black" />
                <image
                  href="/loader-filled.svg"
                  width="400"
                  height="400"
                  x="0"
                  y="0"
                  fill="white"
                />
              </mask>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="0"
                y2="100%"
              >
                <stop offset="0%" style="stop-color: #ffee61" />
                <stop offset="100%" style="stop-color: #ffce3c" />
              </linearGradient>
            </defs>

            <!-- Background SVG -->
            <image
              href="/loader-filled.svg"
              width="400"
              height="400"
              x="0"
              y="0"
              opacity="0.3"
            />

            <!-- Progress fill -->
            <rect
              class="progress-fill"
              width="0"
              height="400"
              fill="url(#progressGradient)"
              mask="url(#svgMask)"
            />
          </svg>
        </div>

        <!-- Loading text -->
      </div>

      <div class="text-scramble__content bg-white border-2 p-8 z-10 absolute w-[400px] flex justify-center items-center border-black bottom-4">
        <p id="status-text" class="text-2xl font-bold text-black">
          initializing...
        </p>
      </div>

      <!-- Background particles -->
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", loaderHTML);

  // Animate the loader
  const tl = gsap.timeline();

  // Start progress bar immediately
  tl.to(
    ".progress-fill",
    {
      width: 400,
      duration: 6, // Total loading duration
      ease: "power2.out",
    },
    0, // Start at timeline beginning
  )

    // Status text updates
    .to(
      "#status-text",
      {
        scrambleText: {
          text: "loading assets...",
          chars: "01",
          speed: 0.5,
        },
        duration: 1,
      },
      0.5,
    )
    .to(
      "#status-text",
      {
        scrambleText: {
          text: "compiling scripts...",
          chars: ".JS",
          speed: 0.3,
        },
        duration: 1.2,
      },
      1.8,
    )
    .to(
      "#status-text",
      {
        scrambleText: {
          text: "loading fonts...",
          chars: "lowerCase",
          speed: 0.4,
        },
        duration: 1,
      },
      3.2,
    )
    .to(
      "#status-text",
      {
        scrambleText: {
          text: "initializing components...",
          chars: "upperCase",
          speed: 0.3,
        },
        duration: 1.3,
      },
      4.5,
    )
    .to(
      "#status-text",
      {
        scrambleText: {
          text: "ready!",
          chars: "!@#$%",
          speed: 0.2,
        },
        duration: 0.8,
      },
      5.8,
    );

  return tl;
}

export function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    return gsap.to(loader, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        loader.remove();
      },
    });
  }
}
