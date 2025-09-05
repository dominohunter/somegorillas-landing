// Template loading utility using ES6 template literals
import { appTemplate } from './app-template.js';

// Render template to DOM
export function renderTemplate(templateHTML, targetElement) {
  if (!templateHTML || !targetElement) {
    console.error('Invalid template or target element');
    return false;
  }
  
  targetElement.innerHTML = templateHTML;
  return true;
}

// Initialize app with template
export function initializeAppWithTemplate(targetSelector = '#app') {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) {
    console.error('Target element not found:', targetSelector);
    return false;
  }

  // Use the imported template instead of fetching
  return renderTemplate(appTemplate, targetElement);
}