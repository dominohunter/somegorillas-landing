// Template loading utility
export async function loadTemplate(templatePath) {
  try {
    const response = await fetch(templatePath);
    if (!response.ok) {
      throw new Error(`Failed to load template: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Template loading error:', error);
    return null;
  }
}

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
export async function initializeAppWithTemplate(targetSelector = '#app') {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) {
    console.error('Target element not found:', targetSelector);
    return false;
  }

  const templateHTML = await loadTemplate('/src/templates/app-template.html');
  if (templateHTML) {
    return renderTemplate(templateHTML, targetElement);
  }
  
  return false;
}