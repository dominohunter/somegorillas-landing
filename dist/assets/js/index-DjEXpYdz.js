import{L as p,g as s}from"./vendor-DXxDvLDe.js";import{s as x,a as g,b as f,c as b}from"./ui-BQsk_Omi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const u=new p({autoRaf:!0});s.registerPlugin(window.ScrambleTextPlugin);const n=["/backgrounds/Hero section.png","/nfts/hero-section/Goldie.webp","/Intersect.svg","/nfts/hero-section/Gangsta.webp","/nfts/hero-section/Zombie.webp","/nfts/hero-section/Wild One.webp","/nfts/hero-section/Lady.webp","/nfts/hero-section/Kiddo.webp","/nfts/hero-section/Sensei.webp","/nfts/hero-section/Nun.webp","/nfts/hero-section/Dude.webp","/backgrounds/Section 2.png","/nfts/section-2/Closed mouth.png","/nfts/section-2/Open Mouth.png","/backgrounds/Section 3.png","/backgrounds/Section 4.png","/backgrounds/Section 5.png","/backgrounds/Section 6.png","/backgrounds/Section 7.png"];function h(e,r){let l=0;const o=n.length;if(o===0){r();return}n.forEach(t=>{const a=new Image,i=()=>{l++;const c=l/o*100;e(c),l===o&&r()};a.onload=i,a.onerror=i,a.src=t})}function m(){document.body.insertAdjacentHTML("afterbegin",`
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
  `);const r=s.timeline();return r.to(".progress-fill",{width:400,duration:6,ease:"power2.out"},0).to("#status-text",{scrambleText:{text:"loading assets...",chars:"01",speed:.5},duration:1},.5).to("#status-text",{scrambleText:{text:"compiling scripts...",chars:".JS",speed:.3},duration:1.2},1.8).to("#status-text",{scrambleText:{text:"loading fonts...",chars:"lowerCase",speed:.4},duration:1},3.2).to("#status-text",{scrambleText:{text:"initializing components...",chars:"upperCase",speed:.3},duration:1.3},4.5).to("#status-text",{scrambleText:{text:"ready!",chars:"!@#$%",speed:.2},duration:.8},5.8),r}function w(){const e=document.getElementById("loader");if(e)return s.to(e,{opacity:0,scale:.8,duration:.8,ease:"power2.inOut",onComplete:()=>{e.remove()}})}const y=`<div class="flex flex-col justify-center">
  <section class="h-screen overflow-hidden flex items-center justify-center flex-col text-white hero-section">
    <div class="flex flex-col gap-6 justify-center items-center mb-20 max-w-[1440px]">
      <h1 id="header" class="section text-[80px] font-bold text-center cartoon-shadow">Go <span id="banana">Bananas </span>with<br/> Some Gorillas</h1>
      <p class="font-pally text-xl leading-7 tracking-widest text-center">Some Gorillas is a meme-fueled NFT project where you can mint, stake, and<br/> earn banana tokens by playing fun mini-games.</p>
      <button class="w-fit bg-gradient-to-b text-dark-primary border-2 border-dark-primary cartoon-boxshadow from-accent-secondary justify-center items-center gap-3 to-accent-primary py-4 pr-6 pl-5 flex flex-wrap-reverse">
        <p class="text-dark-primary font-semibold text-[18px] leading-6">Go to Cave</p>
        <img src="/arrow-right.png" alt="Arrow right"/>
      </button>
    </div>
    <img id="eclipse" class="absolute bottom-0 z-0 shrink-0 object-cover h-[320px]" src="/Intersect.svg" alt="Eclipse"/>
    <div class="absolute bottom-0 h-5/16 flex max-w-[1440px] shrink-0 items-end justify-center">
      <img id="ape1" draggable="false" src="/nfts/hero-section/Gangsta.webp" alt="Gangsta" class="h-[160px] w-[160px] object-contain -mr-10 blur-xs" loading="lazy" />
      <img id="ape2" draggable="false" src="/nfts/hero-section/Zombie.webp" alt="Zombie" class="h-[200px] w-[200px] object-contain -mr-14 blur-[3px]" loading="lazy" />
      <img id="ape3" draggable="false" src="/nfts/hero-section/Wild One.webp" alt="Wild One" class="h-[240px] w-[240px] object-contain -mr-18 blur-[2px]" loading="lazy" />
      <img id="ape4" draggable="false" src="/nfts/hero-section/Lady.webp" alt="Lady" class="h-[280px] w-[280px] object-contain -mr-22 blur-[1px]" loading="lazy" />
      <img id="goldie" draggable="false" src="/nfts/hero-section/Goldie.webp" alt="Goldie" class="h-[320px] w-[320px] z-10 object-contain" loading="lazy" />
      <img id="ape5" draggable="false" src="/nfts/hero-section/Kiddo.webp" alt="Kiddo" class="h-[280px] w-[280px] object-contain -ml-22 blur-[1px]" loading="lazy" />
      <img id="ape6" draggable="false" src="/nfts/hero-section/Sensei.webp" alt="Sensei" class="h-[240px] w-[240px] object-contain -ml-18 blur-[2px]" loading="lazy" />
      <img id="ape7" draggable="false" src="/nfts/hero-section/Nun.webp" alt="Nun" class="h-[200px] w-[200px] object-contain -ml-14 blur-[3px]" loading="lazy" />
      <img id="ape8" draggable="false" src="/nfts/hero-section/Dude.webp" alt="Dude" class="h-[160px] w-[160px] object-contain -ml-10 blur-xs" loading="lazy" />
    </div>
  </section>

  <section class="section-2 h-screen/2 flex items-center py-20 px-16 gap-20 justify-center">
    <div id="mouth-container" class="relative w-[320px] h-[320px] cartoon-boxshadow border-2 rounded-t-full border-black cursor-pointer">
      <div id="circle-bg" class="absolute inset-0 w-full h-full rounded-t-full bg-yellow-500 transition-colors duration-200"></div>
      <img id="closed-mouth" src="/nfts/section-2/Closed mouth.png" alt="Closed mouth" class="absolute inset-0 w-full h-full object-contain z-10" loading="lazy" />
      <img id="open-mouth" src="/nfts/section-2/Open Mouth.png" alt="Open Mouth" class="absolute inset-0 w-full h-full object-contain opacity-0 z-10" loading="lazy" />
    </div>
    <div class="flex flex-col gap-3 py-6 px-8 max-w-[720px] bg-white/80 border rounded-2xl border-black cartoon-boxshadow">
      <p class="text-black text-[40px] font-semibold leading-12 tracking-wider">Some Gorillas?</p>
      <p class="font-pally text-black text-[20px] font-medium leading-6 tracking-wide">
        Some Gorillas is a meme-powered NFT project where each gorilla is a unique collectible with real utility. Mint, stake, and earn banana tokens by playing fun mini-games like coin flip and minesweeper. Built for laughs, rewards, and a community that doesn't take itself too seriously.
      </p>
    </div>
  </section>

  <section class="section-3 h-screen">
    <div class="w-full flex justify-center items-center">
      <div class="max-w-[1440px] h-full w-full flex gap-6 py-[80px] px-[60px] items-start justify-center text-white">
        <div class="grid grid-cols-3 grid-rows-[1fr_400px] flex-1 w-full h-full gap-6">
          <div class="col-span-3 relative p-8 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-60 gradient-blur"></div>
            <p class="relative z-10 text-[56px] text-white font-medium leading-[64px]">Some Gorillas is the <span class="text-[#FFCE3C]">First DAO</span> on Somnia Network</p>
          </div>
          <div class="col-span-2 relative p-6 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-50 gradient-blur"></div>
            <div class="relative z-10 w-full h-full rounded-xl bg-white/5 border-2 border-translucent-light-4 overflow-hidden">
              <img src="/nfts/section-3.png" class="object-cover w-full h-full" alt="Section 3"/>
            </div>
          </div>
          <div class="col-span-1 relative rounded-xl p-4 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -top-10 -right-10 w-60 h-60 rounded-full opacity-40 gradient-blur"></div>
            <div class="relative z-10 bg-translucent-light-4 border-2 border-translucent-light-4 h-full w-full rounded-xl overflow-hidden">
              <img draggable="false" src="/section3/section-3.png" class="object-cover w-full h-full" alt="Section 3 Detail"/>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-[388px_1fr] flex-1 w-full h-full gap-6">
          <div class="col-span-1 row-span-1 relative rounded-2xl p-6 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-45 gradient-blur"></div>
            <div class="relative z-10">
              <img src="/up-right.svg" alt="Up right"/>
            </div>
            <p class="relative z-10 text-[40px] font-medium leading-12 tracking-wide text-white self-start">
              Somnia Twitter
            </p>
          </div>
          <div class="col-span-1 row-span-1 relative rounded-2xl p-6 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-45 gradient-blur"></div>
            <div class="relative z-10">
              <img src="/up-right.svg" alt="Up right"/>
            </div>
            <p class="relative z-10 text-[40px] font-medium leading-12 tracking-wide text-white self-start">
              Somnia Website
            </p>
          </div>
          <div class="col-span-2 relative p-6 rounded-2xl flex flex-col gap-3 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <div class="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-35 gradient-blur"></div>
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

  <section class="section-4 h-screen items-center justify-center py-[80px] gap-12 flex-col text-white flex">
    <h2 class="text-[56px] font-semibold leading-[64px] cartoon-shadow">Fresh Out of the Jungle</h2>
    <div class="grid grid-cols-3 gap-4" id="nft-grid">
      <img src="/nfts/section-4/1.png" alt="NFT 1" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
      <img src="/nfts/section-4/2.png" alt="NFT 2" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
      <img src="/nfts/section-4/3.png" alt="NFT 3" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
      <img src="/nfts/section-4/4.png" alt="NFT 4" class="apes border-2 border-dark-primary w-auto h-[186px] object-cover rounded-lg cartoon-boxshadow" loading="lazy" />
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

  <section class="section-5 py-[80px] px-[60px] gap-12 h-screen flex justify-center items-center">
    <div class="flex flex-col max-w-[1440px] gap-10 justify-center items-center">
      <p class="text-[56px] leading-16 font-semibold text-white cartoon-shadow mb-10">Minigames</p>
      <div class="flex gap-10">
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <img src="/flip-coin.png" class="w-[240px] h-[240px] rounded-2xl border-2 border-black aspect-square" alt="Coin flip"/>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <p class="text-[40px] text-black font-semibold leading-12">Coin Flip</p>
              <p class="font-pally text-[20px] leading-7 text-dark-primary">
                Heads or Butts, the thrill never fails, every flip could change your fate.
              </p>
            </div>
            <button class="bg-gradient-to-r w-fit cartoon-boxshadow from-accent-primary to-accent-secondary border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold">
              Play now!
            </button>
          </div>
        </div>
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]" alt="Mines game"/>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <p class="text-[40px] text-black font-semibold leading-12">Mines</p>
              <p class="font-pally text-[20px] leading-7 text-dark-primary">
                Step carefully, think wisely, one wrong move and it's game over.
              </p>
            </div>
            <button disabled class="bg-light-primary cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
              Coming soon
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-10">
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]" alt="Flinko game"/>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <p class="text-[40px] text-black font-semibold leading-12">Flinko</p>
              <p class="font-pally text-[20px] leading-7 text-dark-primary">
                Drop the chip, chase the thrill, where will it land?
              </p>
            </div>
            <button disabled class="bg-light-primary w-fit cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
              Coming soon
            </button>
          </div>
        </div>
        <div class="flex flex-1 rounded-[20px] p-6 gap-8 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-[240px] h-[240px] rounded-2xl relative border-2 border-black aspect-square">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[52px]" alt="Plane game"/>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <p class="text-[40px] text-black font-semibold leading-12">Plane</p>
              <p class="font-pally text-[20px] leading-7 text-dark-primary">
                Take off, soar high, and see how far you can fly.
              </p>
            </div>
            <button disabled class="bg-light-primary w-fit cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-3 px-6 text-white font-semibold opacity-60">
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-6 min-h-screen py-[80px] px-[60px] flex flex-col justify-center items-center">
    <h2 class="text-[56px] font-semibold leading-[64px] cartoon-shadow mb-6">Roadmap</h2>
    <p class="font-pally text-white max-w-[640px] text-center text-[20px] font-medium leading-7 tracking-wider mb-12">
      We're crafting an exciting DAO NFT project on Somnia with fun games, real rewards, and community control. Here's a quick look at the path ahead. Our Discord is the best place to keep updated.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">1</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Foundation Building</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We're growing our community on Discord and X, building key features on our dApp. Open to collab.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">2</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Mainnet goes brrr</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We'll roll out CoinFlip on mainnet, and let players earn banana through fair and fun play.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">3</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">NFT Launch</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Launch the Gorillas NFTs to seed the treasury and mini-game payout pools. For the degens by the degens.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">4</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Staking with a twist</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Train your gorilla in the "Gym". While training, earn banana. Send your gorilla on an "Adventure". Upon completion they will evolve.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">5</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Be The House</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">We will open our payout pools to the community. Deposit your $SOMI if you want to be "The House". Bigger the pool better in the long-run.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">6</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Wah! $BANANA</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1 break-words">We launch the $BANANA token with exciting utility and community rewards. Go bananas with us!</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">7</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">DAO Governance</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">Founding Gorillas share the decision making power with all Gorillas. Gorillas happy together.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-6 border-2 border-dark-primary bg-translucent-light-64 gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary transition-all duration-300">
        <div class="text-2xl bg-white text-black aspect-square font-bold flex justify-center items-center w-12 h-12 rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">8</div>
        <h3 class="text-[20px] md:text-[24px] font-semibold leading-tight text-black">Merch and beyond</h3>
        <p class="font-pally text-[16px] md:text-[18px] font-medium leading-6 text-black flex-1">At this point, ideally, Gorillas will be rich and known. Together we shall define our next steps. And explore the possibilities of Gorilla Power!</p>
      </div>
    </div>
  </section>

  <section class="section-7 h-screen relative flex justify-center items-center py-[80px] px-[60px]">
    <div class="flex flex-col max-w-[1440px] gap-20 justify-center items-center">
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
      <div class="w-full bottom-0 left-0 right-0 px-[200px] h-[200px]">
        <img id="mouth-closed" src="mouth-closed.png" class="mouth-transition absolute w-[400px] h-[400px] -bottom-[90px]" alt="Mouth closed"/>
        <img id="mouth-open" src="mouth-opened.png" class="mouth-transition absolute w-[400px] h-[400px] -bottom-[90px] opacity-0" alt="Mouth open"/>
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
            <div class="flex flex-col flex-1 gap-3">
              <p class="font-pally text-[16px] font-medium text-dark-primary leading-6">English</p>
              <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px]" placeholder="type smth"/>
            </div>
            <div class="flex flex-col gap-3 flex-1">
              <p class="font-pally text-[16px] font-medium text-dark-primary leading-6">Gorillak</p>
              <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px]" placeholder="type smth"/>
            </div>
          </div>
          <div class="flex justify-center items-center gap-4">
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
        <div class="p-6 w-full">
          <div class="bg-[#29513B] flex flex-col p-5 gap-4 justify-center items-center self-stretch rounded-2xl cartoon-boxshadow border-2 border-dark-primary">
            <div class="flex justify-center">
              <p class="text-accent-primary font-pally text-[20px] font-bold leading-7 tracking-wider">Gorillak Alphabet</p>
            </div>
            <div class="grid justify-center w-full items-center grid-cols-3">
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">A - EI</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">B - OB</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">C - AC</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">D - ED</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">E - OA</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">F - UF</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">G - IG</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">H - OH</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">I - UE</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">J - AJ</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">K - EK</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">L - IL</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">M - UM</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">N - ON</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">O - AU</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">P - AP</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">Q - UQ</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">R - ER</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">S - AS</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">T - OT</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">U - IO</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">V - IV</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">W - AW</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">X - EX</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">Y - OY</p>
              <p class="flex flex-1 font-pally text-white text-[20px] leading-7 tracking-wider font-normal">Z - UZ</p>
            </div>
          </div>
        </div>
        <div class="w-[400px] h-[400px] aspect-square">
          <img src="/Teacher.png" class="object-contain" alt="Teacher"/>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gradient-to-b from-accent-secondary to-accent-primary flex gap-20 justify-center items-center py-[80px] px-[60px]">
    <div class="flex max-w-[1440px] gap-20 justify-center items-center">
      <img src="banana-throw.gif" class="w-[480px] h-[480px] border-2 border-dark-primary rounded-2xl cartoon-boxshadow" alt="Banana throw"/>
      <div class="flex flex-col gap-6">
        <p class="text-[64px] font-semibold leading-[72px] text-dark-primary">$BANANA</p>
        <p class="font-pally text-[20px] font-medium text-dark-primary leading-7">
          Whispers echo through the jungle… something golden is growing, hidden beneath the leaves. The gorillas know it, the trees feel it, the $BANANA is almost ready to fall. Not just a token, but the key to games, rewards, and secrets yet to be revealed. Stay alert, stay curious… only the ones who watch closely will be there when the first $BANANA drops.
        </p>
      </div>
    </div>
  </section>

  <section class="overflow-hidden flex justify-center items-center text-white final-section">
    <div class="max-w-[1440px] flex items-center py-[80px] gap-[60px] px-[60px] justify-center">
      <div class="p-6 rounded-2xl border-2 bg-translucent-light-80 border-dark-primary cartoon-shadowbox flex flex-col gap-4">
        <img src="/NFT.png" class="w-[320px] h-[320px] rounded-xl outline-2 outline-dark-primary" alt="NFT"/>
        <p class="text-center font-pally text-dark-primary text-[20px] font-medium leading-7">
          Gorillaz have gud plan.But we <br/> alwayz listen to Gorillas. Maybe <br/> the Some Gorillas are frens we make <br/> along the way
        </p>
      </div>
      <div class="flex flex-col gap-6 flex-1">
        <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer" onclick="window.open('https://x.com/somegorillas', '_blank')">
          <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
            <img src="/Twitter.svg" alt="Twitter"/>
          </div>
          <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Twitter</p>
          <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow">
            <img src="/arrow-right.png" alt="Arrow right"/>
          </div>
        </div>
        <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer" onclick="window.open('https://discord.gg/somegorillas', '_blank')">
          <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
            <img src="/discord.svg" alt="Discord"/>
          </div>
          <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Discord</p>
          <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow">
            <img src="/arrow-right.png" alt="Arrow right"/>
          </div>
        </div>
        <div class="w-full p-6 flex items-center gap-8 bg-translucent-light-80 border-2 border-dark-primary rounded-2xl cartoon-boxshadow disabled-cursor">
          <div class="rounded-xl p-4 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow">
            <img src="/doc.svg" alt="Documentation"/>
          </div>
          <p class="flex-1 text-[32px] font-semibold text-dark-primary leading-10">Documentation</p>
          <div class="rounded-xl p-4 cursor-not-allowed border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow disabled-cursor">
            <img src="/arrow-right.png" alt="Arrow right"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;function v(e,r){return r?(r.innerHTML=e,!0):(console.error("Invalid template or target element"),!1)}function k(e="#app"){const r=document.querySelector(e);return r?v(y,r):(console.error("Target element not found:",e),!1)}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(e=>{console.log("Service worker registration failed:",e)});function j(){return caches.match("/backgrounds/Hero%20section.png").then(e=>!!e)}async function A(){await j()?(console.log("Assets cached, skipping loader"),d()):(console.log("First visit, showing loader"),T())}function T(){const e=m();let r=!1,l=!1;h(t=>{console.log(`Loading progress: ${t}%`)},()=>{r=!0,o()}),e.eventCallback("onComplete",()=>{l=!0,o()});function o(){r&&l&&setTimeout(()=>{w(),d()},300)}}function d(){if(u.start(),!k("#app")){console.error("Failed to load app template");return}setTimeout(()=>{x(),g(),f(),b()},100),console.log("App initialization complete")}A().catch(e=>{console.error("App initialization failed:",e)});
//# sourceMappingURL=index-DjEXpYdz.js.map
