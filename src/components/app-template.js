// App template as ES6 template literal for better build support
export const appTemplate = `<div class="flex flex-col justify-center">



  <section class="hero-section h-screen overflow-hidden flex items-center justify-center flex-col text-white bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Hero%20section.png')">
    <div class="flex flex-col gap-6 sm:gap-8 justify-center items-center mb-12 sm:mb-16 md:mb-20 max-w-[1440px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-12">
      <h1 id="header" class="section text-[clamp(1.75rem,7vw,80px)] font-bold text-center cartoon-shadow leading-tight">Go <span id="banana">Bananas </span>with<br/> Some Gorillas</h1>
      <p class="font-pally text-[clamp(0.95rem,2.5vw,20px)] leading-6 sm:leading-7 tracking-wide text-center max-w-4xl px-2">Some Gorillas is a meme-fueled NFT project where you can mint, stake, and<br class="hidden sm:block"/> earn banana tokens by playing fun mini-games.</p>
      <button class="w-fit bg-gradient-to-b text-dark-primary mb-10 border-2 border-dark-primary cartoon-boxshadow from-accent-secondary justify-center items-center gap-3 to-accent-primary py-3 sm:py-4 pr-5 sm:pr-6 pl-4 sm:pl-5 flex flex-row items-center hover:scale-105 transition-transform duration-300">
        <p class="text-dark-primary font-semibold text-base sm:text-[18px] leading-6">Go to Cave</p>
        <img src="/arrow-right.png" alt="Arrow right" class="w-4 h-4 sm:w-5 sm:h-5"/>
      </button>
    </div>
    <img id="eclipse" class="absolute bottom-0 z-0 shrink-0 object-cover md:object-contain h-[200px] sm:h-[280px] md:h-[320px] w-full" src="/Intersect.svg" alt="Eclipse"/>
    <div class="absolute bottom-0 h-auto pb-0 flex shrink-0 items-end justify-center overflow-hidden">
      <img id="ape1" draggable="false" src="/nfts/hero-section/Gangsta.webp" alt="Gangsta" class="h-[clamp(80px,12vw,160px)] w-[clamp(80px,12vw,160px)] object-contain -mr-[clamp(20px,4vw,40px)] blur-[4px] opacity-60" loading="lazy" />
      <img id="ape2" draggable="false" src="/nfts/hero-section/Zombie.webp" alt="Zombie" class="h-[clamp(100px,15vw,200px)] w-[clamp(100px,15vw,200px)] object-contain -mr-[clamp(25px,5vw,50px)] blur-[3px] opacity-75" loading="lazy" />
      <img id="ape3" draggable="false" src="/nfts/hero-section/Wild One.webp" alt="Wild One" class="h-[clamp(120px,18vw,240px)] w-[clamp(120px,18vw,240px)] object-contain -mr-[clamp(30px,6vw,60px)] blur-[2px] opacity-85" loading="lazy" />
      <img id="ape4" draggable="false" src="/nfts/hero-section/Lady.webp" alt="Lady" class="h-[clamp(140px,21vw,280px)] w-[clamp(140px,21vw,280px)] object-contain -mr-[clamp(35px,7vw,70px)] blur-[1px] opacity-95" loading="lazy" />
      <img id="goldie" draggable="false" src="/nfts/hero-section/Goldie.webp" alt="Goldie" class="h-[clamp(160px,24vw,320px)] w-[clamp(160px,24vw,320px)] z-10 object-contain opacity-100" loading="lazy" />
      <img id="ape5" draggable="false" src="/nfts/hero-section/Kiddo.webp" alt="Kiddo" class="h-[clamp(140px,21vw,280px)] w-[clamp(140px,21vw,280px)] object-contain -ml-[clamp(35px,7vw,70px)] blur-[1px] opacity-95" loading="lazy" />
      <img id="ape6" draggable="false" src="/nfts/hero-section/Sensei.webp" alt="Sensei" class="h-[clamp(120px,18vw,240px)] w-[clamp(120px,18vw,240px)] object-contain -ml-[clamp(30px,6vw,60px)] blur-[2px] opacity-85" loading="lazy" />
      <img id="ape7" draggable="false" src="/nfts/hero-section/Nun.webp" alt="Nun" class="h-[clamp(100px,15vw,200px)] w-[clamp(100px,15vw,200px)] object-contain -ml-[clamp(25px,5vw,50px)] blur-[3px] opacity-75" loading="lazy" />
      <img id="ape8" draggable="false" src="/nfts/hero-section/Dude.webp" alt="Dude" class="h-[clamp(80px,12vw,160px)] w-[clamp(80px,12vw,160px)] object-contain -ml-[clamp(20px,4vw,40px)] blur-[4px] opacity-60" loading="lazy" />
    </div>
  </section>

  <section class="h-screen md:h-[50vh]  flex flex-col lg:flex-row items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 gap-6 sm:gap-10 lg:gap-20 justify-center bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Section%202.png')">
    <div id="mouth-container" class="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] cartoon-boxshadow border-2 rounded-t-full border-black cursor-pointer flex-shrink-0 hover:scale-105 transition-all duration-300" style="background: radial-gradient(100% 100% at 50% 0%, #E8B95A 0%, #0F1012 100%);" onmouseover="this.style.background='radial-gradient(100% 100% at 50% 0%, #E85A5A 0%, #0F1012 100%)'; document.getElementById('circle-bg').style.background='radial-gradient(100% 100% at 50% 0%, #E85A5A 0%, #0F1012 100%)'" onmouseout="this.style.background='radial-gradient(100% 100% at 50% 0%, #E8B95A 0%, #0F1012 100%)'; document.getElementById('circle-bg').style.background='radial-gradient(100% 100% at 50% 0%, #E8B95A 0%, #0F1012 100%)'">
      <div id="circle-bg" class="absolute inset-0 w-full h-full rounded-t-full transition-all duration-200" style="background: radial-gradient(100% 100% at 50% 0%, #E8B95A 0%, #0F1012 100%);"></div>
      <img id="closed-mouth" src="/nfts/section-2/Closed mouth.webp" alt="Closed mouth" class="absolute inset-0 w-full h-full object-contain z-10" loading="lazy" />
      <img id="open-mouth" src="/nfts/section-2/Open Mouth.webp" alt="Open Mouth" class="absolute inset-0 w-full h-full object-contain opacity-0 z-10" loading="lazy" />
    </div>
    <div class="flex flex-col gap-3 sm:gap-4 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-full lg:max-w-[720px] bg-white/80 border rounded-2xl border-black cartoon-boxshadow">
      <p class="text-black text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight tracking-wide">Some Gorillas?</p>
      <p class="font-pally text-black text-sm sm:text-base md:text-lg lg:text-[20px] font-medium leading-relaxed tracking-wide">
        Some Gorillas is a meme-powered NFT project where each gorilla is a unique collectible with real utility. Mint, stake, and earn banana tokens by playing fun mini-games like coin flip and minesweeper. Built for laughs, rewards, and a community that doesn't take itself too seriously.
      </p>
    </div>
  </section>

  <section class="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat flex items-center justify-center" style="background-image: url('/backgrounds/Section%203.png')">
    <div class="w-full max-w-[1440px]">
      <div class="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 items-start justify-center text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-[1fr_350px] flex-1 w-full h-full gap-4 sm:gap-6">
          <div class="col-span-1 md:col-span-2 lg:col-span-3 relative p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -right-20 -top-20 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -right-10 -top-32 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -right-32 -top-10 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -left-20 -bottom-20 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -left-10 -bottom-32 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -left-32 -bottom-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <p class="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-[56px] text-white font-medium leading-tight">Some Gorillas is the <span class="text-[#FFCE3C]">First DAO</span> on Somnia Network</p>
          </div>
          <div class="col-span-1 md:col-span-1 lg:col-span-2 relative p-4 sm:p-6 rounded-2xl backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -left-20 -bottom-20 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -left-10 -bottom-32 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -left-32 -bottom-10 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -right-20 -top-20 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -right-10 -top-32 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -right-32 -top-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <div class="relative z-10 w-full h-40 sm:h-48 md:h-56 lg:h-full rounded-xl bg-white/5 border-2 border-translucent-light-4 overflow-hidden">
              <img src="/nfts/section-3.webp" class="object-cover w-full h-full" alt="Section 3"/>
            </div>
          </div>
          <div class="col-span-1 relative rounded-xl p-4 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -right-10 -top-10 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -right-20 -top-20 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -right-5 -top-25 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -left-15 -bottom-15 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -left-5 -bottom-25 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -left-25 -bottom-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <div class="relative z-10 bg-translucent-light-4 border-2 border-translucent-light-4 h-40 sm:h-48 md:h-56 lg:h-full w-full rounded-xl overflow-hidden">
              <img draggable="false" src="/section3/section-3.png" class="object-cover w-full h-full" alt="Section 3 Detail"/>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-[320px_1fr] lg:grid-rows-[380px_1fr] flex-1 w-full h-full gap-4 sm:gap-6">
          <div class="col-span-1 row-span-1 relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden min-h-[200px] hover:scale-105 transition-transform duration-300 cursor-pointer" onclick="window.open('https://x.com/Somnia_Network', '_blank')">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -left-20 -top-20 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -left-10 -top-32 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -left-32 -top-10 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -right-20 -bottom-20 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -right-10 -bottom-32 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -right-32 -bottom-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <div class="relative z-10">
              <img src="/up-right.svg" alt="Up right" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>
            </div>
            <p class="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-tight text-white self-start">
              Somnia Twitter
            </p>
          </div>
          <div class="col-span-1 row-span-1 relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-end backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden min-h-[200px] hover:scale-105 transition-transform duration-300 cursor-pointer" onclick="window.open('https://somnia.network/', '_blank')">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -right-20 -top-20 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -right-10 -top-32 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -right-32 -top-10 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -left-20 -bottom-20 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -left-10 -bottom-32 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -left-32 -bottom-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <div class="relative z-10">
              <img src="/up-right.svg" alt="Up right" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>
            </div>
            <p class="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-tight text-white self-start">
              Somnia Website
            </p>
          </div>
          <div class="col-span-1 md:col-span-2 relative p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 backdrop-blur-md bg-translucent-light-4 border border-translucent-light-4 overflow-hidden">
            <!-- Multiple blurred gradient circles -->
            <div class="absolute -right-20 -bottom-20 w-60 h-60 rounded-full opacity-60" style="background: radial-gradient(circle, #69C9EC 0%, #332FF5 33%, #A638E7 67%, #E13949 100%); filter: blur(120px);"></div>
            <div class="absolute -right-10 -bottom-32 w-48 h-48 rounded-full opacity-40" style="background: radial-gradient(circle, #E13949 0%, #A638E7 50%, #332FF5 100%); filter: blur(100px);"></div>
            <div class="absolute -right-32 -bottom-10 w-52 h-52 rounded-full opacity-30" style="background: radial-gradient(circle, #332FF5 0%, #69C9EC 100%); filter: blur(140px);"></div>
            <!-- Additional gradients on opposite side -->
            <div class="absolute -left-20 -top-20 w-56 h-56 rounded-full opacity-50" style="background: radial-gradient(circle, #A638E7 0%, #69C9EC 50%, #332FF5 100%); filter: blur(110px);"></div>
            <div class="absolute -left-10 -top-32 w-44 h-44 rounded-full opacity-35" style="background: radial-gradient(circle, #332FF5 0%, #E13949 100%); filter: blur(90px);"></div>
            <div class="absolute -left-32 -top-5 w-50 h-50 rounded-full opacity-25" style="background: radial-gradient(circle, #69C9EC 0%, #A638E7 100%); filter: blur(130px);"></div>
            <p class="relative z-10 text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
              What is Somnia Network?
            </p>
            <p class="relative z-10 text-white/75 font-pally text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
              Somnia Network is a high-throughput, EVM-compatible L1 blockchain designed for real-time Web3 apps like games, metaverses, and DeFi. Leveraging a novel MultiStream consensus, optimized bytecode execution, and ultra-fast IceDB storage, it delivers over 1M TPS with sub-second finality—making fully on-chain interactive experiences a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="min-h-screen items-center justify-center py-10 sm:py-16 lg:py-[80px] gap-6 sm:gap-8 lg:gap-12 flex-col text-white flex px-4 sm:px-8 bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Section%204.png')">
    <div class="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12 max-w-[1440px] mx-auto w-full">
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-8 sm:leading-10 md:leading-12 lg:leading-[64px] cartoon-shadow text-center">Fresh Out of the Jungle</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-sm sm:max-w-lg lg:max-w-none" id="nft-grid">
        <img src="/nfts/section-4/1.webp" alt="NFT 1" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/2.webp" alt="NFT 2" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/3.webp" alt="NFT 3" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/4.webp" alt="NFT 4" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <div class="empty-slot w-full h-[186px] hidden sm:block"></div>
        <img src="/nfts/section-4/5.webp" alt="NFT 5" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/6.webp" alt="NFT 6" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/7.webp" alt="NFT 7" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
        <img src="/nfts/section-4/8.webp" alt="NFT 8" class="apes border-2 border-dark-primary w-full h-[186px] object-cover rounded-lg cartoon-boxshadow cursor-grab active:cursor-grabbing" loading="lazy" />
      </div>
      <p class="font-pally text-sm sm:text-base md:text-lg lg:text-[20px] font-medium text-dark-primary leading-relaxed tracking-wide text-center px-4">
        [Arrange them by dragging]
      </p>
    </div>
  </section>

  <section class="py-10 sm:py-16 lg:py-[80px] px-4 sm:px-8 lg:px-[60px] gap-6 sm:gap-8 lg:gap-12 min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Section%205.png')">
    <div class="flex flex-col max-w-[1440px] gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
      <p class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-8 sm:leading-10 md:leading-14 lg:leading-16 font-semibold text-white cartoon-shadow mb-4 sm:mb-6 lg:mb-10 text-center">Minigames</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row rounded-[20px] p-4 sm:p-5 lg:p-6 gap-4 sm:gap-5 lg:gap-6 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow hover:scale-105 transition-transform duration-300">
          <img src="/flip-coin.png" class="w-full md:w-[140px] lg:w-full xl:w-[180px] h-40 md:h-[140px] lg:h-48 xl:h-[180px] rounded-2xl border-2 border-black aspect-square object-cover flex-shrink-0" alt="Coin flip"/>
          <div class="flex flex-col gap-3 sm:gap-4 lg:gap-5 flex-1">
            <div class="flex flex-col gap-2">
              <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-black font-semibold leading-tight">Coin Flip</p>
              <p class="font-pally text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-dark-primary">
                Heads or Butts, the thrill never fails, every flip could change your fate.
              </p>
            </div>
            <button class="!bg-gradient-to-r w-fit cartoon-boxshadow from-accent-primary to-accent-secondary text-dark-primary border-dark-primary border-2 rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 text-white font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300">
              <p class="text-dark-primary">Play now!</p>
            </button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row rounded-[20px] p-4 sm:p-5 lg:p-6 gap-4 sm:gap-5 lg:gap-6 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-full md:w-[140px] lg:w-full xl:w-[180px] h-40 md:h-[140px] lg:h-48 xl:h-[180px] rounded-2xl relative border-2 border-black aspect-square flex-shrink-0">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[65px] sm:-bottom-[29px] md:-bottom-[49px] lg:-bottom-[74px] xl:-bottom-[41px] w-[85%] sm:w-full h-auto left-1/2 transform -translate-x-1/2" alt="Mines game"/>
          </div>
          <div class="flex flex-col gap-3 sm:gap-4 lg:gap-5 flex-1">
            <div class="flex flex-col gap-2">
              <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-black font-semibold leading-tight">Mines</p>
              <p class="font-pally text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-dark-primary">
                Step carefully, think wisely, one wrong move and it's game over.
              </p>
            </div>
            <button disabled class="!bg-light-primary w-fit cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 !text-dark-primary font-semibold opacity-80 text-sm sm:text-base">
              Coming soon
            </button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row rounded-[20px] p-4 sm:p-5 lg:p-6 gap-4 sm:gap-5 lg:gap-6 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-full md:w-[140px] lg:w-full xl:w-[180px] h-40 md:h-[140px] lg:h-48 xl:h-[180px] rounded-2xl relative border-2 border-black aspect-square flex-shrink-0">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[65px] sm:-bottom-[29px] md:-bottom-[80px] lg:-bottom-[74px] xl:-bottom-[41px] w-[85%] sm:w-full h-auto left-1/2 transform -translate-x-1/2" alt="Flinko game"/>
          </div>
          <div class="flex flex-col gap-3 sm:gap-4 lg:gap-5 flex-1">
            <div class="flex flex-col gap-2">
              <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-black font-semibold leading-tight">Flinko</p>
              <p class="font-pally text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-dark-primary">
                Drop the chip, chase the thrill, where will it land?
              </p>
            </div>
            <button disabled class="!bg-light-primary w-fit cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 !text-dark-primary font-semibold opacity-80 text-sm sm:text-base">
              Coming soon
            </button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row rounded-[20px] p-4 sm:p-5 lg:p-6 gap-4 sm:gap-5 lg:gap-6 bg-translucent-light-72 border-2 border-dark-primary cartoon-boxshadow">
          <div class="w-full md:w-[140px] lg:w-full xl:w-[180px] h-40 md:h-[140px] lg:h-48 xl:h-[180px] rounded-2xl relative border-2 border-black aspect-square flex-shrink-0">
            <img src="/mouth-closed.png" class="object-cover absolute -bottom-[65px] sm:-bottom-[29px] md:-bottom-[74px] lg:-bottom-[74px] xl:-bottom-[41px] w-[85%] sm:w-full h-auto left-1/2 transform -translate-x-1/2" alt="Plane game"/>
          </div>
          <div class="flex flex-col gap-3 sm:gap-4 lg:gap-5 flex-1">
            <div class="flex flex-col gap-2">
              <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-black font-semibold leading-tight">Plane</p>
              <p class="font-pally text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-dark-primary">
                Take off, soar high, and see how far you can fly.
              </p>
            </div>
            <button disabled class="!bg-light-primary w-fit cartoon-boxshadow disabled:cursor-not-allowed border-dark-primary border-2 rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 !text-dark-primary font-semibold opacity-80 text-sm sm:text-base">
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="min-h-screen py-10 sm:py-16 lg:py-[80px] px-4 sm:px-8 lg:px-[60px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Section%206.png')">
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-8 sm:leading-10 md:leading-12 lg:leading-[64px] cartoon-shadow mb-4 sm:mb-6 text-center">Roadmap</h2>
    <p class="font-pally text-white max-w-[640px] text-center text-sm sm:text-base md:text-lg lg:text-[20px] font-medium leading-5 sm:leading-6 md:leading-7 tracking-wider mb-8 sm:mb-10 lg:mb-12 px-4">
      We're crafting an exciting DAO NFT project on Somnia with fun games, real rewards, and community control. Here's a quick look at the path ahead. Our Discord is the best place to keep updated.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full max-w-7xl">
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">1</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Foundation Building</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">We're growing our community on Discord and X, building key features on our dApp. Open to collab.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">2</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Mainnet goes brrr</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">We'll roll out CoinFlip on mainnet, and let players earn banana through fair and fun play.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">3</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">NFT Launch</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">Launch the Gorillas NFTs to seed the treasury and mini-game payout pools. For the degens by the degens.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">4</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Staking with a twist</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">Train your gorilla in the "Gym". While training, earn banana. Send your gorilla on an "Adventure". Upon completion they will evolve.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">5</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Be The House</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">We will open our payout pools to the community. Deposit your $SOMI if you want to be "The House". Bigger the pool better in the long-run.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">6</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Wah! $BANANA</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1 break-words">We launch the $BANANA token with exciting utility and community rewards. Go bananas with us!</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-lg lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">7</div>
        <h3 class="text-lg sm:text-2xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">DAO Governance</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">Founding Gorillas share the decision making power with all Gorillas. Gorillas happy together.</p>
      </div>
      <div class="roadmap-card cartoon-boxshadow aspect-square flex flex-col items-start p-4 sm:p-5 lg:p-6 border-2 border-dark-primary bg-translucent-light-64 gap-3 sm:gap-4 backdrop-blur-sm rounded-[12px] hover:bg-gradient-to-b hover:from-accent-primary hover:to-accent-secondary hover:scale-105 transition-all duration-300">
        <div class="text-base sm:text-2xl lg:text-xl bg-white text-black aspect-square font-bold flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] border-2 border-dark-primary cartoon-boxshadow flex-shrink-0">8</div>
        <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-[22px] font-semibold leading-tight text-black">Merch and beyond</h3>
        <p class="font-pally text-xl sm:text-base lg:text-[15px] xl:text-[16px] font-medium leading-5 sm:leading-6 lg:leading-6 text-black flex-1">At this point, ideally, Gorillas will be rich and known. Together we shall define our next steps. And explore the possibilities of Gorilla Power!</p>
      </div>
    </div>
  </section>

  <section style="background-image: url('/backgrounds/Section%207.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="min-h-screen relative flex justify-center items-center pt-10 sm:pt-16 lg:pt-20 xl:pt-[80px] px-4 sm:px-8 lg:px-12 xl:px-[60px]">
    <div class="flex flex-col w-full max-w-[1440px] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 justify-center items-center">
      <!-- FAQ Header -->
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] font-semibold leading-8 sm:leading-10 md:leading-12 lg:leading-14 xl:leading-[64px] cartoon-shadow mb-4 sm:mb-6 text-center">FAQ</h2>

        <!-- Responsive FAQ Grid -->
        <div class="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(0)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">Why Some Gorillas?</p>
          </div>

          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(1)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">Why Banana?</p>
          </div>

          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(2)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">Coin flip for what?</p>
          </div>

          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(3)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">Whats the road map?</p>
          </div>

          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(4)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">1 Gorilla vs 100 men?</p>
          </div>

          <div class="faq-item p-3 sm:p-4 lg:p-6 flex border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-translucent-light-64 cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showAnswer(5)">
            <p class="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wider">Have you ever made conversation with gorillas?</p>
          </div>
        </div>
      </div>

      <!-- Bottom section spacer -->
      <div class="relative w-full h-[120px] md:h-[160px]">
        <!-- Just a spacer -->
      </div>
    </div>

    <!-- Monkey hanging from section bottom -->
    <img id="mouth-closed" src="mouth-closed.png" class="mouth-transition absolute -bottom-[45px] md:-bottom-[75px] w-[200px] h-[200px] md:w-[clamp(250px,20vw,400px)] md:h-[clamp(250px,20vw,400px)] left-1/2 transform -translate-x-1/2 md:left-[30%] md:transform md:-translate-x-1/2 object-contain"/>
    <img id="mouth-open" src="mouth-opened.png" class="mouth-transition absolute -bottom-[45px] md:-bottom-[75px] w-[200px] h-[200px] md:w-[clamp(250px,20vw,400px)] md:h-[clamp(250px,20vw,400px)] left-1/2 transform -translate-x-1/2 md:left-[30%] md:transform md:-translate-x-1/2 object-contain opacity-0"/>

    <!-- Answer box positioned properly -->
    <div class="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 md:bottom-[clamp(2rem,12vh,8rem)] md:left-[60%] lg:left-[58%] xl:left-[56%] md:transform md:-translate-x-1/2 p-3 md:p-[clamp(1rem,2vw,1.5rem)] w-[280px] max-w-[90vw] md:w-[clamp(320px,35vw,500px)] border-2 rounded-xl border-dark-primary cartoon-boxshadow backdrop-blur-[20px] bg-[#F6CD79]">
      <p id="answer-text" class="text-black text-xs md:text-[clamp(0.75rem,1.5vw,1.5rem)] font-semibold font-pally leading-4 md:leading-[1.4] tracking-wider text-center md:text-left">Click on the question to get your answer.</p>
    </div>
  </section>

    <section class="py-12 sm:py-16 lg:py-20 xl:py-[120px] bg-[#4C956C] px-4 sm:px-8 lg:px-12 xl:px-[60px] flex flex-col gap-12 sm:gap-16 lg:gap-20 xl:gap-[60px] items-center justify-center">

   <div class="flex flex-col w-full max-w-[1440px] gap-12 sm:gap-16 lg:gap-20 justify-center items-center">

       <!-- Top section: Title and Translator -->
       <div class="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20 w-full items-center">

         <div class="flex flex-col gap-4 sm:gap-6 flex-shrink-0">
           <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-8 sm:leading-10 md:leading-12 lg:leading-14 xl:leading-[72px] cartoon-shadow mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left">
             Learn Gorilak<br/> The Gorilla<br/> Language
           </h2>
          <p class="font-pally text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-5 sm:leading-6 md:leading-7 text-white text-center lg:text-left max-w-md">
             Communicate like a true gorilla! Based on real gorilla vocalizations including grunts, belches, and chest beats.
           </p>
         </div>

         <!-- Translator Box -->
         <div class="bg-[#F6CD79] flex-1 w-full max-w-lg lg:max-w-none p-4 sm:p-6 border-2 border-dark-primary rounded-xl flex flex-col gap-4 sm:gap-6 cartoon-boxshadow">

           <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">

             <div class="flex flex-col flex-1 gap-3 w-full">
               <p class="font-pally text-sm sm:text-base font-medium text-dark-primary leading-5 sm:leading-6">English</p>
               <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-16 sm:h-20 lg:h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px] text-sm sm:text-base" placeholder="type smth"/>
             </div>

             <div class="flex flex-col flex-1 gap-3 w-full">
               <p class="font-pally text-sm sm:text-base font-medium text-dark-primary leading-5 sm:leading-6">Gorillak</p>
               <input class="bg-light-primary rounded-[8px] focus:outline-none border-2 h-16 sm:h-20 lg:h-[96px] text-black font-pally border-dark-primary cartoon-boxshadow py-3 pl-4 pr-[14px] text-sm sm:text-base" placeholder="type smth"/>
             </div>
           </div>

           <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
             <button class="px-4 sm:px-5 bg-gradient-to-b from-accent-primary to-accent-secondary py-2.5 sm:py-3 border-2 border-dark-primary cartoon-boxshadow text-sm sm:text-base font-medium text-dark-primary rounded hover:scale-105 transition-transform duration-300">
               Translate
             </button>

             <button class="px-4 sm:px-5 bg-light-primary py-2.5 sm:py-3 text-dark-primary border-2 border-dark-primary cartoon-boxshadow text-sm sm:text-base font-medium  rounded hover:scale-105 transition-transform duration-300">
               <p class="text-sm sm:text-base font-medium text-dark-primary">Swap</p>
             </button>

             <button class="px-4 sm:px-5 py-2.5 sm:py-3 border-2 bg-light-primary border-dark-primary cartoon-boxshadow text-sm sm:text-base font-medium text-dark-primary rounded hover:scale-105 transition-transform duration-300">
               <p class="text-sm sm:text-base font-medium text-dark-primary">Clear</p>
             </button>
           </div>
         </div>
       </div>

       <!-- Bottom section: Alphabet and Teacher -->
       <div class="bg-[#F6CD79] flex flex-col lg:flex-row w-full max-w-6xl justify-center items-start gap-4 sm:gap-6 border-2 rounded-[20px] border-dark-primary cartoon-boxshadow p-4 sm:p-6">

         <div class="flex-1 w-full relative">
           <div class="bg-[#29513B] flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 justify-center items-center rounded-2xl cartoon-boxshadow border-2 border-dark-primary">
             <div class="flex justify-center">
               <p class="text-accent-primary font-pally text-lg sm:text-xl font-bold leading-6 sm:leading-7 tracking-wider text-center">Gorillak Alphabet</p>
             </div>

             <div class="grid justify-center w-full items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2">
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">A - EI</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">B - OB</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">C - AC</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">D - ED</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">E - OA</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">F - UF</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">G - IG</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">H - OH</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">I - UE</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">J - AJ</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">K - EK</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">L - IL</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">M - UM</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">N - ON</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">O - AU</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">P - AP</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">Q - UQ</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">R - ER</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">S - AS</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">T - OT</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">U - IO</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">V - IV</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">W - AW</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">X - EX</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">Y - OY</p>
               <p class="font-pally text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-4 sm:leading-5 md:leading-6 tracking-wider font-normal text-center">Z - UZ</p>
             </div>
           </div>
         </div>

         <!-- Teacher Image -->
         <div class="w-full max-w-xs sm:max-w-sm lg:w-[300px] xl:w-[400px] h-auto aspect-square flex-shrink-0 self-end">
           <img src="/Teacher.png" class="w-full h-full object-contain"/>
         </div>

       </div>

     </div>
   </section>

  <section class="bg-gradient-to-b from-accent-secondary to-accent-primary flex justify-center items-center py-16 sm:py-20 lg:py-[80px] px-4 sm:px-8 lg:px-[60px]">
    <div class="flex flex-col lg:flex-row max-w-[1440px] gap-8 sm:gap-12 lg:gap-20 justify-center items-center">
      <img src="banana-throw.gif" class="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] border-2 border-dark-primary rounded-2xl cartoon-boxshadow" alt="Banana throw"/>
      <div class="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold leading-10 sm:leading-12 md:leading-16 lg:leading-[72px] text-dark-primary">$BANANA</p>
        <p class="font-pally text-base sm:text-lg lg:text-[20px] font-medium text-dark-primary leading-6 sm:leading-7 max-w-2xl">
          Whispers echo through the jungle… something golden is growing, hidden beneath the leaves. The gorillas know it, the trees feel it, the $BANANA is almost ready to fall. Not just a token, but the key to games, rewards, and secrets yet to be revealed. Stay alert, stay curious… only the ones who watch closely will be there when the first $BANANA drops.
        </p>
      </div>
    </div>
  </section>

  <section class="overflow-hidden flex justify-center items-center text-white py-16 sm:py-20 lg:py-[80px] px-4 sm:px-8 lg:px-[60px] bg-cover bg-center bg-no-repeat" style="background-image: url('/backgrounds/Hero%20section.png')">
    <div class="max-w-[1440px] flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-[60px] justify-center w-full">
      <div class="p-6 sm:p-8 rounded-2xl border-2 bg-white/90 border-dark-primary cartoon-boxshadow flex flex-col gap-4 sm:gap-6 w-full max-w-sm lg:max-w-md xl:max-w-lg flex-shrink-0">
        <img src="/NFT.png" class="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto aspect-square rounded-xl border-2 border-dark-primary mx-auto" alt="NFT"/>
        <p class="text-center font-pally text-dark-primary text-lg sm:text-xl lg:text-[22px] font-medium leading-relaxed">
          Gorillaz have gud plan. But we alwayz listen to Gorillas. Maybe the Some Gorillas are frens we make along the way
        </p>
      </div>
      <div class="flex flex-col gap-4 sm:gap-6 flex-1 w-full max-w-2xl">
        <div class="w-full p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/90 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer hover:scale-105 transition-transform duration-300" onclick="window.open('https://x.com/somegorillas', '_blank')">
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow flex-shrink-0">
            <img src="/Twitter.svg" alt="Twitter" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
          </div>
          <p class="flex-1 text-2xl sm:text-3xl lg:text-[36px] font-semibold text-dark-primary leading-tight">Twitter</p>
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow flex-shrink-0">
            <img src="/arrow-right.png" alt="Arrow right" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"/>
          </div>
        </div>
        <div class="w-full p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/90 border-2 border-dark-primary rounded-2xl cartoon-boxshadow cursor-pointer hover:scale-105 transition-transform duration-300" onclick="window.open('https://discord.gg/somegorillas', '_blank')">
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow flex-shrink-0">
            <img src="/discord.svg" alt="Discord" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
          </div>
          <p class="flex-1 text-2xl sm:text-3xl lg:text-[36px] font-semibold text-dark-primary leading-tight">Discord</p>
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow flex-shrink-0">
            <img src="/arrow-right.png" alt="Arrow right" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"/>
          </div>
        </div>
        <div class="w-full p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/60 border-2 border-dark-primary rounded-2xl cartoon-boxshadow opacity-75 cursor-not-allowed">
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-dark-primary flex items-center justify-center aspect-square bg-[#856BB5] cartoon-boxshadow flex-shrink-0 opacity-60">
            <img src="/doc.svg" alt="Documentation" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
          </div>
          <p class="flex-1 text-2xl sm:text-3xl lg:text-[36px] font-semibold text-dark-primary leading-tight">Documentation</p>
          <div class="rounded-xl p-3 sm:p-4 lg:p-5 cursor-not-allowed border-2 border-dark-primary flex items-center justify-center aspect-square bg-light-primary cartoon-boxshadow opacity-60 flex-shrink-0">
            <img src="/arrow-right.png" alt="Arrow right" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;
