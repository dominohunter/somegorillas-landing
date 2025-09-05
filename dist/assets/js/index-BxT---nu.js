import{L as u,g as a}from"./vendor-DXxDvLDe.js";import{s as p,a as f,b as g,c as h}from"./ui-BQsk_Omi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const m=new u({autoRaf:!0});a.registerPlugin(window.ScrambleTextPlugin);const c=["/backgrounds/Hero section.png","/nfts/hero-section/Goldie.webp","/Intersect.svg","/nfts/hero-section/Gangsta.webp","/nfts/hero-section/Zombie.webp","/nfts/hero-section/Wild One.webp","/nfts/hero-section/Lady.webp","/nfts/hero-section/Kiddo.webp","/nfts/hero-section/Sensei.webp","/nfts/hero-section/Nun.webp","/nfts/hero-section/Dude.webp","/backgrounds/Section 2.png","/nfts/section-2/Closed mouth.png","/nfts/section-2/Open Mouth.png","/backgrounds/Section 3.png","/backgrounds/Section 4.png","/backgrounds/Section 5.png","/backgrounds/Section 6.png","/backgrounds/Section 7.png"];function b(e,t){let r=0;const n=c.length;if(n===0){t();return}c.forEach(o=>{const s=new Image,i=()=>{r++;const d=r/n*100;e(d),r===n&&t()};s.onload=i,s.onerror=i,s.src=o})}function w(){document.body.insertAdjacentHTML("afterbegin",`
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
  `);const t=a.timeline();return t.to(".progress-fill",{width:400,duration:6,ease:"power2.out"},0).to("#status-text",{scrambleText:{text:"loading assets...",chars:"01",speed:.5},duration:1},.5).to("#status-text",{scrambleText:{text:"compiling scripts...",chars:".JS",speed:.3},duration:1.2},1.8).to("#status-text",{scrambleText:{text:"loading fonts...",chars:"lowerCase",speed:.4},duration:1},3.2).to("#status-text",{scrambleText:{text:"initializing components...",chars:"upperCase",speed:.3},duration:1.3},4.5).to("#status-text",{scrambleText:{text:"ready!",chars:"!@#$%",speed:.2},duration:.8},5.8),t}function x(){const e=document.getElementById("loader");if(e)return a.to(e,{opacity:0,scale:.8,duration:.8,ease:"power2.inOut",onComplete:()=>{e.remove()}})}async function v(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load template: ${t.statusText}`);return await t.text()}catch(t){return console.error("Template loading error:",t),null}}function y(e,t){return!e||!t?(console.error("Invalid template or target element"),!1):(t.innerHTML=e,!0)}async function k(e="#app"){const t=document.querySelector(e);if(!t)return console.error("Target element not found:",e),!1;const r=await v("/src/templates/app-template.html");return r?y(r,t):!1}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(e=>{console.log("Service worker registration failed:",e)});function L(){return caches.match("/backgrounds/Hero%20section.png").then(e=>!!e)}async function T(){await L()?(console.log("Assets cached, skipping loader"),await l()):(console.log("First visit, showing loader"),S())}function S(){const e=w();let t=!1,r=!1;b(o=>{console.log(`Loading progress: ${o}%`)},()=>{t=!0,n()}),e.eventCallback("onComplete",()=>{r=!0,n()});function n(){t&&r&&setTimeout(async()=>{x(),await l()},300)}}async function l(){if(m.start(),!await k("#app")){console.error("Failed to load app template");return}setTimeout(()=>{p(),f(),g(),h()},100),console.log("App initialization complete")}T().catch(e=>{console.error("App initialization failed:",e)});
//# sourceMappingURL=index-BxT---nu.js.map
