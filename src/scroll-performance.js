let ticking = false;

function createIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: [0, 0.1, 0.5, 1]
  };

  const observer = new IntersectionObserver((entries) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        entries.forEach(entry => {
          const element = entry.target;
          
          if (entry.isIntersecting) {
            element.classList.add('in-view');
            
            if (element.dataset.lazy === 'true') {
              loadLazyContent(element);
            }
          } else {
            element.classList.remove('in-view');
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, observerOptions);

  return observer;
}

function loadLazyContent(element) {
  if (element.dataset.lazyLoaded === 'true') return;
  
  const bgImage = element.dataset.bgImage;
  if (bgImage) {
    const img = new Image();
    img.onload = () => {
      element.style.backgroundImage = `url('${bgImage}')`;
      element.dataset.lazyLoaded = 'true';
      element.classList.add('bg-loaded');
    };
    img.src = bgImage;
  }
  
  const lazyImgs = element.querySelectorAll('img[data-lazy-src]');
  lazyImgs.forEach(img => {
    if (!img.dataset.lazyLoaded) {
      img.src = img.dataset.lazySrc;
      img.dataset.lazyLoaded = 'true';
    }
  });
}

export function initializeScrollPerformance() {
  const observer = createIntersectionObserver();
  
  const sectionsToObserve = document.querySelectorAll('section');
  sectionsToObserve.forEach(section => {
    observer.observe(section);
    
    if (section.style.backgroundImage && section.style.backgroundImage.includes('url')) {
      const bgUrl = section.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/)?.[1];
      if (bgUrl) {
        section.dataset.bgImage = bgUrl;
        section.dataset.lazy = 'true';
        section.style.backgroundImage = '';
      }
    }
  });
  
  const lazyElements = document.querySelectorAll('[data-lazy="true"]');
  lazyElements.forEach(el => observer.observe(el));
  
  document.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

export function optimizeDOMNodes() {
  const expensiveElements = document.querySelectorAll('.backdrop-blur-md, [style*="blur"]');
  
  expensiveElements.forEach(element => {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)';
  });
  
  const gradientElements = document.querySelectorAll('[style*="background: radial-gradient"]');
  gradientElements.forEach(element => {
    element.style.willChange = 'transform';
    element.style.backfaceVisibility = 'hidden';
  });
}

export function debounceScrollEvents() {
  let scrollTimeout;
  
  document.addEventListener('scroll', () => {
    document.body.classList.add('scrolling');
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('scrolling');
    }, 150);
  }, { passive: true });
}