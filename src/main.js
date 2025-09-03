import "./style.css";

import { lenis } from "./smooth-scroll.js";
import { createLoader, hideLoader, preloadAssets } from "./loader.js";
import gsap from "gsap";
import { Draggable } from "gsap/all";

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

function checkCacheStatus() {
  return caches
    .match("/backgrounds/Hero%20section.png")
    .then((response) => !!response);
}

// SINGLE initialization point
async function initApp() {
  const isCached = await checkCacheStatus();

  if (isCached) {
    // Skip loader entirely - assets are cached
    console.log("Assets cached, skipping loader");
    initializeApp();
  } else {
    // First visit - show full loader
    console.log("First visit, showing loader");
    runLoaderSequence();
  }
}

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

// Start the app
initApp();

function initializeApp() {
  // Skip loader, go straight to smooth scroll
  lenis.start();
  setupTranslator();
  document.querySelector("#app").innerHTML = `
  <div class="flex flex-col justify-center">
    <section class="h-screen overflow-hidden flex items-center justify-center flex-col text-white" style="background-image: url('/backgrounds/Hero%20section.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

      <div class="flex flex-col gap-6 justify-center items-center mb-20 max-w-[1440px]">


        <h1 id="header" class="section text-[80px] font-bold text-center cartoon-shadow">Go <span id="banana">Bananas </span>with<br/> Some Gorillas</h1>
        <p class="font-pally text-xl leading-7 tracking-widest  text-center">Some Gorillas is a meme-fueled NFT project where you can mint, stake, and<br/> earn banana tokens by playing fun mini-games.</p>
        <button class="w-fit bg-gradient-to-b text-dark-primary border-2 border-dark-primary cartoon-boxshadow from-accent-secondary justify-center items-center gap-3 to-accent-primary py-4 pr-6 pl-5 flex flex-wrap-reverse ">
<p class="text-dark-primary font-semibold text-[18px] leading-6">Go to Cave</p>
          <img src="/arrow-right.png"/>
        </button>

      </div>


    <img id="eclipse" class="absolute bottom-0 z-0 shrink-0 object-cover h-[320px]" src="/Intersect.svg"/>


      <div class="absolute bottom-0 h-5/16 flex max-w-[1440px] shrink-0 items-end justify-center">
        <img id="ape1" draggable="false" src="/nfts/hero-section/Gangsta.png" alt="Dude" class="h-[160px] w-[160px] object-contain -mr-10 blur-xs" loading="lazy" />
        <img  id="ape2" draggable="false" src="/nfts/hero-section/Zombie.png" alt="Gangsta" class="h-[200px] w-[200px] object-contain -mr-14 blur-[3px]" loading="lazy" />
        <img  id="ape3"  draggable="false" src="/nfts/hero-section/Wild One.png" alt="Goldie" class="h-[240px] w-[240px] object-contain -mr-18 blur-[2px]" loading="lazy" />
        <img  id="ape4"  draggable="false" src="/nfts/hero-section/Lady.png" alt="Kiddo" class="h-[280px] w-[280px] object-contain -mr-22 blur-[1px]" loading="lazy" />
        <img  id="goldie"  draggable="false" src="/nfts/hero-section/Goldie.png" alt="Lady" class=" h-[320px] w-[320px] z-10 object-contain" loading="lazy" />
        <img  id="ape5"  draggable="false" src="/nfts/hero-section/Kiddo.png" alt="Nun" class="h-[280px] w-[280px] object-contain -ml-22 blur-[1px]" loading="lazy" />
        <img  id="ape6"  draggable="false" src="/nfts/hero-section/Sensei.png" alt="Sensei" class="h-[240px] w-[240px] object-contain -ml-18 blur-[2px]" loading="lazy" />
        <img  id="ape7"  draggable="false" src="/nfts/hero-section/Nun.png" alt="Wild One" class="h-[200px] w-[200px] object-contain -ml-14 blur-[3px]" loading="lazy" />
        <img  id="ape8"  draggable="false" src="/nfts/hero-section/Dude.png" alt="Zombie" class="h-[160px] w-[160px] object-contain -ml-10 blur-xs" loading="lazy" />
      </div>

       </section>
  <section style="background-image: url('/backgrounds/Section%202.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="h-screen/2 flex items-center py-20 px-16 gap-20 justify-center">
  <!-- Mouth Container with circular background -->
  <div id="mouth-container" class="relative w-[320px] h-[320px] cartoon-boxshadow border-2 rounded-t-full border-black cursor-pointer">
    <!-- Circular background that changes color -->
    <div id="circle-bg" class="absolute inset-0 w-full h-full rounded-t-full bg-yellow-500 transition-colors duration-200"></div>

    <!-- Character images -->
    <img id="closed-mouth" src="/nfts/section-2/Closed mouth.png" alt="Closed mouth" class="absolute inset-0 w-full h-full object-contain z-10" loading="lazy" />
    <img id="open-mouth" src="/nfts/section-2/Open Mouth.png" alt="Open Mouth" class="absolute inset-0 w-full h-full object-contain opacity-0 z-10" loading="lazy" />
  </div>

    <div class="flex flex-col gap-3 py-6 px-8 max-w-[720px] bg-white/80 border rounded-2xl border-black cartoon-boxshadow">
      <p class="text-black text-[40px] font-semibold leading-12 tracking-wider ">Some Gorillas?</p>

        <p class="font-pally text-black text-[20px] font-medium leading-6 tracking-wide">
Some Gorillas is a meme-powered NFT project where each gorilla is a unique collectible with real utility. Mint, stake, and earn banana tokens by playing fun mini-games like coin flip and minesweeper. Built for laughs, rewards, and a community that doesn't take itself too seriously.
        </p>
    </div>
</section>

   <section style="background-image: url('/backgrounds/Section%203.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="h-screen">
        <div class="w-full flex justify-center items-center">
            <div class="max-w-[1440px] h-full w-full flex gap-6 py-[80px] px-[60px] items-start justify-center text-white">
                <div class="grid grid-cols-3 grid-rows-[1fr_400px] flex-1 w-full h-full gap-6">
                    <div class="col-span-3 relative p-8 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-60" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <p class="relative z-10 text-[56px] text-white font-medium leading-[64px]">Some Gorillas is the <span class="text-[#FFCE3C]">First DAO</span> on Somnia Network</p>
                    </div>
                    <div class="col-span-2 relative p-6 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-50" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <div class="relative z-10 w-full h-full rounded-xl bg-white/5 border-2 border-translucent-light-4 overflow-hidden">
                            <img src="/nfts/section-3.png" class="object-cover w-full h-full"/>
                        </div>
                    </div>
                    <div class="col-span-1 relative rounded-xl p-4 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -top-10 -right-10 w-60 h-60 rounded-full opacity-40" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <div class="relative z-10 bg-translucent-light-4 border-2 border-translucent-light-4 h-full w-full rounded-xl overflow-hidden">
                            <img draggable="false" src="/section3/section-3.png" class="object-cover w-full h-full"/>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 grid-rows-[388px_1fr] flex-1 w-full h-full gap-6">
                    <div class="col-span-1 row-span-1 relative rounded-2xl p-6 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-45" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <div class="relative z-10">
                            <img src="/up-right.svg"/>
                        </div>
                        <p class="relative z-10 text-[40px] font-medium leading-12 tracking-wide text-white self-start">
                            Somnia Twitter
                        </p>
                    </div>
                    <div class="col-span-1 row-span-1 relative rounded-2xl p-6 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-45" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <div class="relative z-10">
                            <img src="/up-right.svg"/>
                        </div>
                        <p class="relative z-10 text-[40px] font-medium leading-12 tracking-wide text-white self-start">
                            Somnia Website
                        </p>
                    </div>
                    <div class="col-span-2 relative p-6 rounded-2xl flex flex-col gap-3 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
                        <!-- Gradient blur background -->
                        <div class="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-35" style="background: linear-gradient(270deg, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(100px);"></div>
                        <p class="relative z-10 text-white text-[32px] font-semibold leading-12 tracking-wide">
                            What is Somnia Network?
                        </p>
                        <p class="relative z-10 text-white/65 font-pally text-[20px] leading-[28px] tracking-wide">
                            Somnia Network is a high-throughput, EVM-compatible L1 blockchain designed for real-time Web3 apps like games, metaverses, and DeFi. Leveraging a novel MultiStream consensus, optimized bytecode execution, and ultra-fast IceDB storage, it delivers over 1M TPS with sub-second finality—making fully on-chain interactive experiences a reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <section style="background-image: url('/backgrounds/Section%204.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="h-screen items-center justify-center py-[80px] gap-12 flex-col text-white flex">
      <h2 class="text-[56px] font-semibold leading-[64px] cartoon-shadow">Fresh Out of the Jungle</h2>
     <div class="grid grid-cols-3 gap-4" id="nft-grid">
    <img src="/nfts/section-4/1.png" alt="NFT 1" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/2.png" alt="NFT 2" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/3.png" alt="NFT 3" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/4.png" alt="NFT 4" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <!-- Empty middle spot -->
    <div class="empty-slot w-auto h-[186px]"></div>
    <img src="/nfts/section-4/5.png" alt="NFT 5" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/6.png" alt="NFT 6" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/7.png" alt="NFT 7" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
    <img src="/nfts/section-4/8.png" alt="NFT 8" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
  </div>
          <p class="font-pally text-[20px] font-medium text-dark-primary leading-7 tracking-wider">
[Arrange them by dragging]
          </p>
    </section>

<section  style="background-image: url('/backgrounds/Section%205.png'); background-size: cover; background-position: center; background-repeat: no-repeat;"  class="py-[80px] px-[60px] gap-12 h-screen flex justify-center items-center">

       <div class="flex flex-col max-w-[1440px] gap-10 justify-center items-center">

<p class="text-[56px] leading-16 font-semibold text-white cartoon-shadow mb-10">Minigames</p>
 <div class="flex gap-10">
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
            <img src="/flip-coin.png" class="w-[240px] h-[240px] rounded-2xl border-2 border-black aspect-square"/>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-3">
                    <p class="text-[40px] text-black font-semibold leading-12">
                        Coin Flip
                    </p>
                    <p class="font-pally text-[20px] leading-7 text-dark-primary">
                        Heads or Butts, the thrill never fails, every flip could change your fate.
                    </p>
                </div>
                <button class="bg-gradient-to-r cartoon-boxshadow from-accent-primary to-accent-secondary border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold">
                    Play now!
                </button>
            </div>
        </div>
        
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
          <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]"/>
            </div>

            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-3">
                    <p class="text-[40px] text-black font-semibold leading-12">
                        Mines
                    </p>
                    <p class="font-pally text-[20px] leading-7 text-dark-primary">
                        Step carefully, think wisely, one wrong move and it's game over.
                    </p>
                </div>
                <button disabled class="bg-gray-400 cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
                    Coming soon
                </button>
            </div>
        </div>
    </div>

    <div class="flex gap-10">
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
            <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
          <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]"/>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-3">
                    <p class="text-[40px] text-black font-semibold leading-12">
                        Flinko
                    </p>
                    <p class="font-pally text-[20px] leading-7 text-dark-primary">
                        Drop the chip, chase the thrill, where will it land?
                    </p>
                </div>
                <button disabled class="bg-gray-400 cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
                    Coming soon
                </button>
            </div>
        </div>

        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
            <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
          <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]"/>
            </div>


            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-3">
                    <p class="text-[40px] text-black font-semibold leading-12">
                        Plane
                    </p>
                    <p class="font-pally text-[20px] leading-7 text-dark-primary">
                        Take off, soar high, and see how far you can fly.
                    </p>
                </div>
                <button disabled class="bg-gray-400 cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
                    Coming soon
                </button>
            </div>
        </div>
    </div>

</div>
</div>
</section>


<section style="background-image: url('/backgrounds/Section%206.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="min-h-screen py-[80px] px-[60px] flex flex-col justify-center items-center">
  

    <h2 class="text-[56px] font-semibold leading-[64px] cartoon-shadow mb-6">Roadmap</h2>
  <p class="font-pally text-white max-w-[640px] text-center text-[20px] font-medium leading-7 tracking-wider mb-12">
    We're crafting an exciting DAO NFT project on Somnia with fun games, real rewards, and community control. Here's a quick look at the path ahead. Our Discord is the best place to keep updated.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
    <!-- Card 1 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">1</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Foundation Building</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We're growing our community on Discord and X, building key features on our dApp. Open to collab.</p>
    </div>

    <!-- Card 2 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">2</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Mainnet goes brrr</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We'll roll out CoinFlip on mainnet, and let players earn banana through fair and fun play.</p>
    </div>

    <!-- Card 3 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">3</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">NFT Launch</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Launch the Gorillas NFTs to seed the treasury and mini-game payout pools. For the degens by the degens.</p>
    </div>

    <!-- Card 4 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">4</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Staking with a twist</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Train your gorilla in the "Gym". While training, earn banana. Send your gorilla on an "Adventure". Upon completion they will evolve.</p>
    </div>

    <!-- Card 5 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">5</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Be The House</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We will open our payout pools to the community. Deposit your $SOMI if you want to be "The House". Bigger the pool better in the long-run.</p>
    </div>

    <!-- Card 6 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">6</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Wah! $BANANA</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1 break-words">We launch the $BANANA token with exciting utility and community rewards. Go bananas with us!</p>
    </div>

    <!-- Card 7 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">7</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">DAO Governance</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Founding Gorillas share the decision making power with all Gorillas. Gorillas happy together.</p>
    </div>

    <!-- Card 8 -->
    <div class="cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
      <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">8</div>
      <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Merch and beyond</h3>
      <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">At this point, ideally, Gorillas will be rich and known. Together we shall define our next steps. And explore the possibilities of Gorilla Power!</p>
    </div>
  </div>
</section>


<section style="background-image: url('/backgrounds/Section%207.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="h-screen relative flex justify-center items-center py-[80px] px-[60px]">
        <div class="flex flex-col max-w-[1440px] gap-20 justify-center items-center">
    <!-- Center the top content manually -->
    <div class="flex flex-col items-center justify-center h-full">
        <h2 class="text-[56px] font-semibold leading-[64px] cartoon-shadow mb-6">FAQ</h2>
        
      <div class="grid gap-6 grid-cols-3 grid-rows-2 w-full max-w-6xl">
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(0)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">Why Some Gorillas?</p>
    </div>
    
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(1)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">Why Banana?</p>
    </div>
    
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(2)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">Coin flip for what?</p>
    </div>
    
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(3)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">Whats the road map?</p>
    </div>
    
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(4)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">1 Gorilla vs 100 men?</p>
    </div>
    
    <div class="faq-item p-6 flex-1 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64" onclick="showAnswer(5)">
        <p class="text-black text-[24px] font-semibold leading-8 tracking-wider">Have you ever made conversation with gorillas?</p>
    </div>
</div>

    </div>

    <!-- Bottom section - absolutely positioned -->
   <div class=" w-full bottom-0 left-0 right-0 px-[200px] h-[200px]">
    <img id="mouth-closed" src="mouth-closed.png" class="mouth-transition absolute w-[400px] h-[400px] -bottom-[90px]"/>
    <img id="mouth-open" src="mouth-opened.png" class="mouth-transition absolute w-[400px] h-[400px] -bottom-[90px] opacity-0"/>
    
    <div class="p-6 absolute bottom-20 left-[calc(50%+300px)] transform -translate-x-1/2 w-auto border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-[#F6CD79]">
        <p id="answer-text" class="text-black text-[24px] font-semibold font-pally leading-8 tracking-wider">Click on the question to get your answer.</p>
    </div>
</div>
</div>
  </section>


  <section class="pt-[120px] bg-[#4C956C] px-[60px] pb-[80px] flex flex-col gap-[60px] items-center justify-center">

<div class="flex flex-col max-w-[1440px] gap-20 justify-center items-center">

    <div class="flex gap-20 self-stretch items-center">

      <div class="flex flex-col gap-6">
        <h2 class="text-[64px] font-semibold leading-[72px] cartoon-shadow mb-6"> Learn Gorilak<br/> The Gorilla<br/> Language</h2>
       <p class="font-pally text-[20px] font-medium leading-7 text-white">
          Communicate like a true gorilla! Based on real gorilla<br/> vocalizations including grunts, belches,<br/> and chest beats.
        </p>
      </div>


      <div class="bg-[#F6CD79] flex-1 p-6 border-2 border-dark-primary rounded-xl flex flex-col gap-6 cartoon-boxshadow">

        <div class="flex items-start self-stretch gap-6">

          <div class="flex flex-col flex-1 gap-3 ">

            <p class="font-pally text-[16px] font-medium text-dark-primary leading-6">English</p>

            <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px]" placeholder="type smth"/>
          </div>

            <div class="flex flex-col gap-3 flex-1 ">

            <p class="font-pally text-[16px] font-medium text-dark-primary leading-6">Gorillak</p>

            <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px]" placeholder="type smth"/>
          </div>
        </div>

        <div class="flex justify-center items-center gap-4 ">
          <button class="px-5 bg-gradient-to-b from-accent-primary to-accent-secondary py-3 border-2 border-dark-primary cartoon-boxshadow">
            Translate
          </button>

           <button class="px-5 bg-light-primary py-3 border-2 border-dark-primary cartoon-boxshadow">
            Swap
          </button>

           <button class="px-5 py-3 border-2 bg-light-primary border-dark-primary cartoon-boxshadow">
            Clear
          </button>
        </div>
      </div>
    </div>

  <div class="bg-[#F6CD79] flex w-[1320px] justify-center items-start gap-6 border-2 rounded-[20px] border-dark-primary cartoon-boxshadow">
  <div class="p-6 w-full ">
    
      <div class="bg-[#29513B] flex flex-col p-5 gap-4 justify-center items-center self-stretch rounded-2xl cartoon-boxshadow border-2 border-dark-primary">
        <div class="flex justify-center">
          <p class="text-accent-primary font-pally text-[20px] font-bold leading-7 tracking-wider">Gorillak Alphabet</p>
        </div>

        <div class="grid justify-center w-full items-center grid-cols-3">
          <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
            <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>

        </div>
      </div>

        </div>

      <div class="w-[400px] h-[400px] aspect-square">
  <img src="/Teacher.png" class="object-contain"/>
      </div>

    </div>

      </div>
  </section>


  <section class="bg-gradient-to-b from-accent-secondary to-accent-primary flex gap-20 justify-center items-center py-[80px] px-[60px]">
    
<div class="flex max-w-[1440px] gap-20 justify-center items-center">
    
    <img src="banana-throw.gif" class="w-[480px] h-[480px] border-2 border-dark-primary rounded-2xl cartoon-boxshadow"/>

    <div class="flex flex-col gap-6">
      <p class="text-[64px] font-semibold leading-[72px] text-dark-primary">$BANANA</p>

      <p class="font-pally text-[20px] font-medium text-dark-primary leading-7">

        Whispers echo through the jungle… something golden is growing, hidden beneath the leaves. The gorillas know it, the trees feel it, the $BANANA is almost ready to fall. Not just a token, but the key to games, rewards, and secrets yet to be revealed. Stay alert, stay curious… only the ones who watch closely will be there when the first $BANANA drops.

      </p>
    </div>

      </div>
  </section>


  <section class="h-screen overflow-hidden flex justify-center items-center  text-white" style="background-image: url('/backgrounds/Hero%20section.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

    <div class="max-w-[1440px] flex items-center py-[80px] gap-[60px] px-[60px] justify-center">

   
    <div class="p-6 rounded-2xl border-2 bg-translucent-light-80 border-dark-primary cartoon-shadowbox flex flex-col gap-4">
      <img src="/NFT.png" class="w-[320px] h-[320px] rounded-xl outline-2 outline-dark-primary"/>
      <p class="text-center font-pally text-dark-primary text-[20px] font-medium leading-7">
        Gorillaz have gud plan.But we <br/> alwayz listen to Gorillas. Maybe <br/> the Some Gorillas are frens we make <br/> along the way 
      </p>
    </div>
    <div class="flex flex-col gap-6 flex-1">
      <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer" onclick="window.open('https://x.com/somegorillas', '_blank')">
        <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
          <img src="/Twitter.svg"/>
        </div>
        <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Twitter</p>
       <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow">
         <img src="/arrow-right.png"/>
        </div>
      </div>
       <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer" onclick="window.open('https://discord.gg/somegorillas', '_blank')">
        <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
          <img src="/discord.svg"/>
        </div>
        <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Discord</p>
       <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow">
         <img src="/arrow-right.png"/>
        </div>
      </div>
       <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow disabled-cursor">
        <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
          <img src="/doc.svg"/>
        </div>
        <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Documentation</p>
       <div class="rounded-xl p-4 cursor-not-allowed border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow disabled-cursor">
         <img src="/arrow-right.png"/>
        </div>
      </div>
    </div>
</div>
  </section>

  </div>
`;

  // Gorilla Language Translation System - Improved Version
  function setupTranslator() {
    // Enhanced character mapping for more realistic gorilla sounds
    const gorillaMap = {
      a: "EI",
      b: "OB",
      c: "AC",
      d: "ED",
      e: "OA",
      f: "UF",
      g: "IG",
      h: "OH",
      i: "UE",
      j: "AJ",
      k: "EK",
      l: "IL",
      m: "UM",
      n: "ON",
      o: "AU",
      p: "AP",
      q: "UQ",
      r: "ER",
      s: "AS",
      t: "OT",
      u: "IO",
      v: "IV",
      w: "AW",
      x: "EX",
      y: "OY",
      z: "UZ",
    };

    // Create reverse mapping for Gorillak to English
    const reverseGorillaMap = {};
    Object.keys(gorillaMap).forEach((key) => {
      reverseGorillaMap[gorillaMap[key]] = key;
    });

    function translateToGorillak(text) {
      if (!text) return "";

      return text
        .toLowerCase()
        .split("")
        .map((char) => {
          if (gorillaMap[char]) {
            return gorillaMap[char];
          }
          // Keep spaces, punctuation, and numbers unchanged
          return char;
        })
        .join(" "); // Add spaces between gorilla sounds
    }

    function translateToEnglish(gorillaText) {
      if (!gorillaText) return "";

      // Split by spaces to get individual gorilla sounds
      const sounds = gorillaText.toLowerCase().split(/\s+/);

      return sounds
        .map((sound) => {
          // Check if it's a gorilla sound
          if (reverseGorillaMap[sound]) {
            return reverseGorillaMap[sound];
          }
          // If not a gorilla sound, keep as is (for punctuation, numbers, etc.)
          return sound;
        })
        .join("");
    }

    // Find translator elements more reliably
    const translatorSection = document.querySelector(
      "section.bg-\\[\\#4C956C\\]",
    );
    if (!translatorSection) {
      console.log("Translator section not found");
      return;
    }

    const translatorBox = translatorSection.querySelector(
      ".bg-\\[\\#F6CD79\\]",
    );
    if (!translatorBox) {
      console.log("Translator box not found");
      return;
    }

    const inputs = translatorBox.querySelectorAll(
      'input[placeholder="type smth"]',
    );
    const buttons = translatorBox.querySelectorAll("button");

    if (!inputs || inputs.length < 2 || !buttons || buttons.length < 3) {
      console.log("Translator elements not found", {
        inputsLength: inputs?.length,
        buttonsLength: buttons?.length,
      });
      return;
    }

    const englishField = inputs[0]; // First input (English)
    const gorillaField = inputs[1]; // Second input (Gorillak)

    let translateButton, swapButton, clearButton;

    // Find buttons by text content
    buttons.forEach((btn) => {
      const text = btn.textContent.trim();
      if (text === "Translate") translateButton = btn;
      else if (text === "Swap") swapButton = btn;
      else if (text === "Clear") clearButton = btn;
    });

    // Add visual feedback styles
    const addSuccessFlash = (element) => {
      element.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.5)";
      setTimeout(() => {
        element.style.boxShadow = "";
      }, 500);
    };

    // Translate button functionality
    if (translateButton) {
      translateButton.addEventListener("click", (e) => {
        e.preventDefault();

        const englishText = englishField.value.trim();
        const gorillaText = gorillaField.value.trim();

        if (englishText && !gorillaText) {
          // Translate English to Gorillak
          const translated = translateToGorillak(englishText);
          gorillaField.value = translated;
          addSuccessFlash(gorillaField);

          // Add typing animation effect
          animateTyping(gorillaField, translated);
        } else if (gorillaText && !englishText) {
          // Translate Gorillak to English
          const translated = translateToEnglish(gorillaText);
          englishField.value = translated;
          addSuccessFlash(englishField);

          animateTyping(englishField, translated);
        } else if (englishText && gorillaText) {
          // Both fields have content, prioritize English to Gorillak
          const translated = translateToGorillak(englishText);
          gorillaField.value = translated;
          addSuccessFlash(gorillaField);

          animateTyping(gorillaField, translated);
        } else {
          // No input provided - shake the translate button
          shakeElement(translateButton);
        }
      });
    }

    // Swap button functionality
    if (swapButton) {
      swapButton.addEventListener("click", (e) => {
        e.preventDefault();

        const tempValue = englishField.value;
        englishField.value = gorillaField.value;
        gorillaField.value = tempValue;

        // Add visual feedback
        animateSwap(englishField, gorillaField);
      });
    }

    // Clear button functionality
    if (clearButton) {
      clearButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Animate clearing
        animateClear([englishField, gorillaField], () => {
          englishField.value = "";
          gorillaField.value = "";
        });
      });
    }

    // Enhanced real-time translation with debounce
    let englishTimeout, gorillaTimeout;

    englishField.addEventListener("input", () => {
      clearTimeout(englishTimeout);

      if (englishField.value.trim() && !gorillaField.value.trim()) {
        englishTimeout = setTimeout(() => {
          const translated = translateToGorillak(englishField.value);
          gorillaField.value = translated;
          gorillaField.style.opacity = "0.7";
          setTimeout(() => {
            gorillaField.style.opacity = "1";
          }, 200);
        }, 800); // Increased debounce time
      }
    });

    gorillaField.addEventListener("input", () => {
      clearTimeout(gorillaTimeout);

      if (gorillaField.value.trim() && !englishField.value.trim()) {
        gorillaTimeout = setTimeout(() => {
          const translated = translateToEnglish(gorillaField.value);
          englishField.value = translated;
          englishField.style.opacity = "0.7";
          setTimeout(() => {
            englishField.style.opacity = "1";
          }, 200);
        }, 800);
      }
    });

    // Animation functions
    function animateTyping(element, finalText) {
      const originalValue = element.value;
      element.value = "";

      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < finalText.length) {
          element.value += finalText[i];
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);
    }

    function animateSwap(element1, element2, label1, label2) {
      // Animate input fields
      [element1, element2].forEach((el, index) => {
        el.style.transform = `translateX(${index === 0 ? "20px" : "-20px"})`;
        el.style.transition = "transform 0.3s ease";

        setTimeout(() => {
          el.style.transform = "translateX(0)";
        }, 300);
      });

      // Animate labels if they exist
      if (label1 && label2) {
        [label1, label2].forEach((label, index) => {
          label.style.transform = `scale(0.8) rotate(${index === 0 ? "5deg" : "-5deg"})`;
          label.style.transition = "transform 0.3s ease";

          setTimeout(() => {
            label.style.transform = "scale(1) rotate(0deg)";
          }, 300);
        });
      }
    }

    function animateClear(elements, callback) {
      elements.forEach((el) => {
        el.style.transform = "scale(0.95)";
        el.style.opacity = "0.5";
        el.style.transition = "transform 0.2s ease, opacity 0.2s ease";
      });

      setTimeout(() => {
        callback();
        elements.forEach((el) => {
          el.style.transform = "scale(1)";
          el.style.opacity = "1";
        });
      }, 200);
    }

    function shakeElement(element) {
      element.style.animation = "shake 0.5s ease-in-out";
      setTimeout(() => {
        element.style.animation = "";
      }, 500);
    }

    // Add shake animation CSS
    if (!document.querySelector("#shake-animation-style")) {
      const style = document.createElement("style");
      style.id = "shake-animation-style";
      style.textContent = `
      @keyframes shake {
        0%, 20%, 40%, 60%, 80%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      }
    `;
      document.head.appendChild(style);
    }

    // Test functions for debugging
    window.translateToGorillak = translateToGorillak;
    window.translateToEnglish = translateToEnglish;

    // Test the translation
    console.log("Gorilla Translator initialized successfully!");
    console.log("Test - hello:", translateToGorillak("hello"));
    console.log(
      "Test - ook eep lah lah ooh:",
      translateToEnglish("ook eep lah lah ooh"),
    );

    return {
      translateToGorillak,
      translateToEnglish,
      test: () => {
        console.log("Testing translations:");
        const tests = ["hello", "world", "gorilla", "banana"];
        tests.forEach((word) => {
          const gorilla = translateToGorillak(word);
          const backToEnglish = translateToEnglish(gorilla);
          console.log(`${word} -> ${gorilla} -> ${backToEnglish}`);
        });
      },
    };
  }

  // Enhanced initialization with better error handling
  function initializeTranslator() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(setupTranslator, 100);
      });
    } else {
      // DOM is already ready
      setTimeout(setupTranslator, 100);
    }
  }

  // Initialize the translator
  initializeTranslator();

  // Export for manual testing
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { setupTranslator };
  }

  function setupFAQEventListeners() {
    const faqItems = document.querySelectorAll(".faq-item[data-faq-index]");

    const answers = [
      "Because, We are.",
      "Because, Gorilla eat banana.",
      "I dunno. I guess, for bananas?",
      "OOH! OOH! AHH! AHH! AHHHHH!!!",
      "OOH! OOH! AHH! AHH! AHHHHH!!!",
      "OOH! OOH! AHH! AHH! AHHHHH!!!",
    ];
    window.showAnswer = function (index) {
      // Swap mouth images
      const mouthClosed = document.getElementById("mouth-closed");
      const mouthOpen = document.getElementById("mouth-open");

      if (mouthClosed && mouthOpen) {
        mouthClosed.style.opacity = "0";
        mouthOpen.style.opacity = "1";
      }

      // Update the answer text
      const answerText = document.getElementById("answer-text");
      if (answerText) {
        answerText.textContent = answers[index];
      }

      // Close mouth after 3 seconds
      setTimeout(() => {
        if (mouthClosed && mouthOpen) {
          mouthClosed.style.opacity = "1";
          mouthOpen.style.opacity = "0";
        }
      }, 3000);
    };
    faqItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const index = parseInt(item.getAttribute("data-faq-index"));
        showAnswer(index);
      });

      // Add hover effect
      item.style.cursor = "pointer";
      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-2px)";
        item.style.transition = "transform 0.2s ease";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)";
      });
    });
  }

  // Call setupFAQEventListeners after the DOM is rendered
  setTimeout(setupFAQEventListeners, 100);
  function setupMouthHover() {
    const mouthContainer = document.querySelector("#mouth-container");
    const closedMouth = document.querySelector("#closed-mouth");
    const openMouth = document.querySelector("#open-mouth");
    const circleBg = document.querySelector("#circle-bg");

    if (!mouthContainer || !closedMouth || !openMouth || !circleBg) return;

    // Initial state - ensure closed mouth is visible
    gsap.set(closedMouth, { opacity: 1 });
    gsap.set(openMouth, { opacity: 0 });

    // Hover event listeners with instant animation
    mouthContainer.addEventListener("mouseenter", () => {
      gsap.set(closedMouth, { opacity: 0 });
      gsap.set(openMouth, { opacity: 1 });

      // Change circle background to red
      circleBg.classList.remove("bg-yellow-500");
      circleBg.classList.add("bg-red-500");
    });

    mouthContainer.addEventListener("mouseleave", () => {
      gsap.set(closedMouth, { opacity: 1 });
      gsap.set(openMouth, { opacity: 0 });

      // Change circle background back to yellow
      circleBg.classList.remove("bg-red-500");
      circleBg.classList.add("bg-yellow-500");
    });
  }

  gsap.registerPlugin(Draggable);

  function setupDraggableNFTs() {
    const grid = document.getElementById("nft-grid");
    const apes = document.querySelectorAll(".apes");

    if (!grid || apes.length === 0) {
      console.log("Grid or apes not found:", { grid, apesCount: apes.length });
      return;
    }

    console.log("Setting up draggable for", apes.length, "apes");

    let isDragging = false;

    // Helper function to calculate overlap area between two rectangles
    function getOverlapArea(rect1, rect2) {
      const left = Math.max(rect1.left, rect2.left);
      const right = Math.min(rect1.right, rect2.right);
      const top = Math.max(rect1.top, rect2.top);
      const bottom = Math.min(rect1.bottom, rect2.bottom);

      if (left < right && top < bottom) {
        return (right - left) * (bottom - top);
      }
      return 0;
    }

    function swapElements(elem1, elem2) {
      console.log("Swapping elements:", elem1, elem2);

      // Clear any existing transforms before swapping
      gsap.set([elem1, elem2], {
        clearProps: "all",
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        zIndex: 1,
      });

      // Create a temporary marker
      const temp = document.createElement("div");
      temp.style.display = "none";

      // Insert temp before elem1
      elem1.parentNode.insertBefore(temp, elem1);

      // Move elem1 to where elem2 is
      elem2.parentNode.insertBefore(elem1, elem2);

      // Move elem2 to where temp (originally elem1) is
      temp.parentNode.insertBefore(elem2, temp);

      // Remove temp marker
      temp.remove();

      // Animation feedback with slight delay to avoid conflicts
      gsap.fromTo(
        [elem1, elem2],
        { scale: 0.8, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
          delay: 0.1,
        },
      );
    }

    function moveToEmptySlot(ape, emptySlot) {
      console.log("Moving to empty slot:", ape, emptySlot);

      // Clear any existing transforms before moving
      gsap.set(ape, {
        clearProps: "all",
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        zIndex: 1,
      });

      // Create new empty slot where the ape was
      const newEmptySlot = document.createElement("div");
      newEmptySlot.className = "empty-slot w-auto h-[186px]";

      // Replace the ape with empty slot
      ape.parentNode.insertBefore(newEmptySlot, ape);

      // Move ape to the empty slot position
      emptySlot.parentNode.insertBefore(ape, emptySlot);

      // Remove the original empty slot
      emptySlot.remove();

      // Animation feedback with slight delay to avoid conflicts
      gsap.fromTo(
        ape,
        { scale: 0.8, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
          delay: 0.1,
        },
      );
    }

    apes.forEach((ape, index) => {
      console.log(`Setting up draggable for ape ${index}:`, ape);

      Draggable.create(ape, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: grid,

        onDragStart: function () {
          console.log("Drag started for:", this.target);
          isDragging = true;

          // Bring to front and scale
          gsap.set(this.target, {
            zIndex: 1000,
            pointerEvents: "none",
          });

          gsap.to(this.target, {
            scale: 1.1,
            rotation: 5,
            duration: 0.2,
            ease: "power2.out",
          });

          document.body.style.userSelect = "none";
        },

        onDrag: function () {
          const rotation = this.deltaX * 0.1;
          gsap.set(this.target, { rotation: rotation });
        },

        onDragEnd: function () {
          console.log("Drag ended for:", this.target);
          isDragging = false;
          document.body.style.userSelect = "";

          gsap.set(this.target, { pointerEvents: "auto" });

          // Get the current position of the dragged element
          const draggedRect = this.target.getBoundingClientRect();
          console.log("Dragged element position:", draggedRect);

          let targetApe = null;
          let targetSlot = null;
          let maxOverlap = 0;

          // Check overlap with other apes
          document.querySelectorAll(".apes").forEach((ape) => {
            if (ape === this.target) return;

            const apeRect = ape.getBoundingClientRect();
            const overlap = getOverlapArea(draggedRect, apeRect);

            if (overlap > maxOverlap && overlap > 1000) {
              // Minimum overlap threshold
              maxOverlap = overlap;
              targetApe = ape;
              targetSlot = null;
            }
          });

          // If no ape overlap, check empty slots
          if (!targetApe) {
            document.querySelectorAll(".empty-slot").forEach((slot) => {
              const slotRect = slot.getBoundingClientRect();
              const overlap = getOverlapArea(draggedRect, slotRect);

              if (overlap > maxOverlap && overlap > 1000) {
                maxOverlap = overlap;
                targetSlot = slot;
                targetApe = null;
              }
            });
          }

          console.log(
            "Target ape:",
            targetApe,
            "Target slot:",
            targetSlot,
            "Max overlap:",
            maxOverlap,
          );

          let swapped = false;

          if (targetApe) {
            console.log("Swapping with another ape");
            swapElements(this.target, targetApe);
            swapped = true;
          } else if (targetSlot) {
            console.log("Moving to empty slot");
            moveToEmptySlot(this.target, targetSlot);
            swapped = true;
          } else {
            console.log("No valid drop target found");
          }

          // Reset visual state - clear all transforms first
          gsap.set(this.target, { clearProps: "all" });

          gsap.to(this.target, {
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            zIndex: 1,
            duration: swapped ? 0.4 : 0.3,
            ease: swapped ? "back.out(1.7)" : "power2.out",
          });
        },
      });
    });
  }

  setupMouthHover();
  setupDraggableNFTs();

  let tl = gsap.timeline();

  const apeOuter = ["#ape1", "#ape8"];
  const apeOuter1 = ["#ape2", "#ape7"];
  const apeOuter2 = ["#ape3", "#ape6"];
  const apeOuter3 = ["#ape4", "#ape5"];

  tl.set("#eclipse", {
    y: 320,
    scale: 1,
    opacity: 0,
  });

  tl.set(apeOuter, {
    opacity: 0,
    y: -80,
  });

  tl.set(apeOuter1, {
    opacity: 0,
    y: -60,
  });

  tl.set(apeOuter2, {
    opacity: 0,
    y: -40,
  });
  tl.set(apeOuter3, {
    opacity: 0,
    y: -20,
  });
  tl.set("#goldie", {
    opacity: 0,
    y: -80,
  });

  tl.fromTo(
    "#eclipse",
    { opacity: 0, y: 120 },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
    },
  );

  tl.to(["#goldie", apeOuter3, apeOuter2, apeOuter1, apeOuter], {
    y: 0,
    opacity: 1,
    stagger: 0.1, // Add stagger for sequential animation
  });

  const headerAnimation = gsap.to("#header", {
    rotation: 360,
    x: 10,
    yPercent: 50,
    paused: true,
  });

  // Ape animation with proper timing and scroll trigger
  tl.play();

  // Play ape animation immediately on page start
  const counterElement = document.querySelector("#counter");
  if (counterElement) {
    setupCounter(counterElement);
  }
}
