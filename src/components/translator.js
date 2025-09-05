// Gorilla Language Translation System
export function setupTranslator() {
  const gorillaMap = {
    a: "EI", b: "OB", c: "AC", d: "ED", e: "OA", f: "UF", g: "IG", h: "OH",
    i: "UE", j: "AJ", k: "EK", l: "IL", m: "UM", n: "ON", o: "AU", p: "AP",
    q: "UQ", r: "ER", s: "AS", t: "OT", u: "IO", v: "IV", w: "AW", x: "EX",
    y: "OY", z: "UZ",
  };

  const reverseGorillaMap = {};
  Object.keys(gorillaMap).forEach((key) => {
    reverseGorillaMap[gorillaMap[key]] = key;
  });

  function translateToGorillak(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .split("")
      .map((char) => gorillaMap[char] || char)
      .join(" ");
  }

  function translateToEnglish(gorillaText) {
    if (!gorillaText) return "";
    const sounds = gorillaText.toLowerCase().split(/\s+/);
    return sounds
      .map((sound) => reverseGorillaMap[sound] || sound)
      .join("");
  }

  const translatorSection = document.querySelector("section.bg-\\[\\#4C956C\\]");
  if (!translatorSection) return;

  const translatorBox = translatorSection.querySelector(".bg-\\[\\#F6CD79\\]");
  if (!translatorBox) return;

  const inputs = translatorBox.querySelectorAll('input[placeholder="type smth"]');
  const buttons = translatorBox.querySelectorAll("button");

  if (!inputs || inputs.length < 2 || !buttons || buttons.length < 3) return;

  const englishField = inputs[0];
  const gorillaField = inputs[1];

  let translateButton, swapButton, clearButton;

  buttons.forEach((btn) => {
    const text = btn.textContent.trim();
    if (text === "Translate") translateButton = btn;
    else if (text === "Swap") swapButton = btn;
    else if (text === "Clear") clearButton = btn;
  });

  const addSuccessFlash = (element) => {
    element.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.5)";
    setTimeout(() => {
      element.style.boxShadow = "";
    }, 500);
  };

  if (translateButton) {
    translateButton.addEventListener("click", (e) => {
      e.preventDefault();

      const englishText = englishField.value.trim();
      const gorillaText = gorillaField.value.trim();

      if (englishText && !gorillaText) {
        const translated = translateToGorillak(englishText);
        gorillaField.value = translated;
        addSuccessFlash(gorillaField);
        animateTyping(gorillaField, translated);
      } else if (gorillaText && !englishText) {
        const translated = translateToEnglish(gorillaText);
        englishField.value = translated;
        addSuccessFlash(englishField);
        animateTyping(englishField, translated);
      } else if (englishText && gorillaText) {
        const translated = translateToGorillak(englishText);
        gorillaField.value = translated;
        addSuccessFlash(gorillaField);
        animateTyping(gorillaField, translated);
      } else {
        shakeElement(translateButton);
      }
    });
  }

  if (swapButton) {
    swapButton.addEventListener("click", (e) => {
      e.preventDefault();
      const tempValue = englishField.value;
      englishField.value = gorillaField.value;
      gorillaField.value = tempValue;
      animateSwap(englishField, gorillaField);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      animateClear([englishField, gorillaField], () => {
        englishField.value = "";
        gorillaField.value = "";
      });
    });
  }

  // Real-time translation with debounce
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
      }, 800);
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

  function animateSwap(element1, element2) {
    [element1, element2].forEach((el, index) => {
      el.style.transform = `translateX(${index === 0 ? "20px" : "-20px"})`;
      el.style.transition = "transform 0.3s ease";
      setTimeout(() => {
        el.style.transform = "translateX(0)";
      }, 300);
    });
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

  // Add shake animation CSS if not exists
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

  return { translateToGorillak, translateToEnglish };
}