import gsap from "gsap";
import { Draggable } from "gsap/all";

// Register GSAP plugins
gsap.registerPlugin(Draggable);

// Mouth hover interaction for section 2
export function setupMouthHover() {
  const mouthContainer = document.querySelector("#mouth-container");
  const closedMouth = document.querySelector("#closed-mouth");
  const openMouth = document.querySelector("#open-mouth");
  const circleBg = document.querySelector("#circle-bg");

  if (!mouthContainer || !closedMouth || !openMouth || !circleBg) return;

  // Initial state
  gsap.set(closedMouth, { opacity: 1 });
  gsap.set(openMouth, { opacity: 0 });

  mouthContainer.addEventListener("mouseenter", () => {
    gsap.set(closedMouth, { opacity: 0 });
    gsap.set(openMouth, { opacity: 1 });
    circleBg.classList.remove("bg-yellow-500");
    circleBg.classList.add("bg-red-500");
  });

  mouthContainer.addEventListener("mouseleave", () => {
    gsap.set(closedMouth, { opacity: 1 });
    gsap.set(openMouth, { opacity: 0 });
    circleBg.classList.remove("bg-red-500");
    circleBg.classList.add("bg-yellow-500");
  });
}

// FAQ interaction functionality
export function setupFAQEventListeners() {
  const answers = [
    "Because, We are.",
    "Because, Gorilla eat banana.",
    "I dunno. I guess, for bananas?",
    "OOH! OOH! AHH! AHH! AHHHHH!!!",
    "OOH! OOH! AHH! AHH! AHHHHH!!!",
    "OOH! OOH! AHH! AHH! AHHHHH!!!",
  ];

  function showAnswer(index) {
    const mouthClosed = document.getElementById("mouth-closed");
    const mouthOpen = document.getElementById("mouth-open");

    if (mouthClosed && mouthOpen) {
      mouthClosed.style.opacity = "0";
      mouthOpen.style.opacity = "1";
    }

    const answerText = document.getElementById("answer-text");
    if (answerText) {
      answerText.textContent = answers[index];
    }

    setTimeout(() => {
      if (mouthClosed && mouthOpen) {
        mouthClosed.style.opacity = "1";
        mouthOpen.style.opacity = "0";
      }
    }, 3000);
  }

  // Set up event listeners for FAQ items
  const faqItems = document.querySelectorAll(".faq-item[data-faq-index]");
  
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

  // Also expose globally for backwards compatibility
  window.showAnswer = showAnswer;
}

// Draggable NFTs functionality
export function setupDraggableNFTs() {
  const grid = document.getElementById("nft-grid");
  const apes = document.querySelectorAll(".apes");

  if (!grid || apes.length === 0) {
    console.log("Grid or apes not found:", { grid, apesCount: apes.length });
    return;
  }

  let isDragging = false;

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
    gsap.set([elem1, elem2], {
      clearProps: "all",
      scale: 1,
      rotation: 0,
      x: 0,
      y: 0,
      zIndex: 1,
    });

    const temp = document.createElement("div");
    temp.style.display = "none";

    elem1.parentNode.insertBefore(temp, elem1);
    elem2.parentNode.insertBefore(elem1, elem2);
    temp.parentNode.insertBefore(elem2, temp);
    temp.remove();

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
    gsap.set(ape, {
      clearProps: "all",
      scale: 1,
      rotation: 0,
      x: 0,
      y: 0,
      zIndex: 1,
    });

    const newEmptySlot = document.createElement("div");
    newEmptySlot.className = "empty-slot w-auto h-[186px]";

    ape.parentNode.insertBefore(newEmptySlot, ape);
    emptySlot.parentNode.insertBefore(ape, emptySlot);
    emptySlot.remove();

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

  apes.forEach((ape) => {
    Draggable.create(ape, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: grid,

      onDragStart: function () {
        isDragging = true;
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
        isDragging = false;
        document.body.style.userSelect = "";
        gsap.set(this.target, { pointerEvents: "auto" });

        const draggedRect = this.target.getBoundingClientRect();
        let targetApe = null;
        let targetSlot = null;
        let maxOverlap = 0;

        document.querySelectorAll(".apes").forEach((ape) => {
          if (ape === this.target) return;

          const apeRect = ape.getBoundingClientRect();
          const overlap = getOverlapArea(draggedRect, apeRect);

          if (overlap > maxOverlap && overlap > 1000) {
            maxOverlap = overlap;
            targetApe = ape;
            targetSlot = null;
          }
        });

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

        let swapped = false;

        if (targetApe) {
          swapElements(this.target, targetApe);
          swapped = true;
        } else if (targetSlot) {
          moveToEmptySlot(this.target, targetSlot);
          swapped = true;
        }

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