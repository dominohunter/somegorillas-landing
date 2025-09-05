import gsap from "gsap";

// Register GSAP plugins
gsap.registerPlugin();

export function initHeroAnimations() {
  // Set everything to visible immediately, no animations
  gsap.set("#header", { 
    y: 0, 
    opacity: 1
  });
  
  gsap.set(".font-pally", { 
    y: 0, 
    opacity: 1 
  });
  
  gsap.set("button", { 
    y: 0,
    opacity: 1
  });
  
  // Set gorillas to visible immediately
  const gorillas = [
    "#ape1", "#ape2", "#ape3", "#ape4", 
    "#goldie", "#ape5", "#ape6", "#ape7", "#ape8"
  ];
  
  gsap.set(gorillas, {
    y: 0,
    opacity: 1
  });

  // No animations, just add hover effects
  addCleanHoverEffects();
}

function addCleanHoverEffects() {
  // Simple button hover
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
}

// Particle effect disabled
export function createParticleEffect() {
  // No particle effects or floating animations
}