

console.log('Hello 1!');

// Function to create and style a new div
function createStyledDiv() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Hello, this is a dynamically inserted div!<br>my settings<br>save/load<br>list of links, inspirations';
  newDiv.style.backgroundColor = 'var(--background-color)';
  newDiv.style.color = 'var(--text-color)';
  newDiv.style.padding = '20px';
  newDiv.style.margin = '17px';
  newDiv.style.border = '3px solid var(--article-border-color)';
  newDiv.style.borderRadius = '3px';
  newDiv.style.boxShadow = '0 4px 8px var(--article-shadow-color)';
  document.body.appendChild(newDiv);
}

// Function to create and style a toggle button
function createToggleButton() {
  const toggleButton = document.createElement('button');
  toggleButton.id = 'xtogglebutton';
  toggleButton.textContent = '🎨✨💫 Style It!';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '20px';
  toggleButton.style.right = '20px';
  toggleButton.style.padding = '15px 30px';
  toggleButton.style.fontSize = '18px';
  toggleButton.style.fontWeight = 'bold';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '10px';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.zIndex = '9999';
  toggleButton.style.background = 'linear-gradient(45deg, #2b0b3f, #8a2be2)';
  toggleButton.style.color = '#ffffff';
  toggleButton.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.4)';
  toggleButton.style.transition = 'all 0.3s ease';
  toggleButton.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';

  // Initial state
  toggleButton.style.opacity = '0';
  toggleButton.style.transform = 'scale(0.8) rotate(-5deg)';

  document.body.appendChild(toggleButton);

  // Attention-grabbing entrance animation
  gsap.to(toggleButton, {
    duration: 1.5,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "elastic.out(333, 0.5)",
    delay: 0.5
  });

  // Continuous attention-grabbing animation
  const attentionAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    .to(toggleButton, {
      duration: 0.6,
      scale: 1.1,
      rotation: 5,
      boxShadow: '0 0 30px rgba(138, 43, 226, 0.6)',
      background: 'linear-gradient(45deg, #2b0b3f, #8a2be2)',
      ease: "power2.inOut"
    })
    .to(toggleButton, {
      duration: 0.6,
      scale: 1,
      rotation: -5,
      boxShadow: '0 0 20px rgba(43, 11, 63, 0.6)',
      background: 'linear-gradient(45deg, #8a2be2, #2b0b3f)',
      ease: "power2.inOut"
    })
    .to(toggleButton, {
      duration: 0.6,
      scale: 1.1,
      rotation: 5,
      boxShadow: '0 0 30px rgba(138, 43, 226, 0.6)',
      background: 'linear-gradient(45deg, #2b0b3f, #8a2be2)',
      ease: "power2.inOut"
    })
    .to(toggleButton, {
      duration: 0.6,
      scale: 1,
      rotation: 0,
      boxShadow: '0 0 20px rgba(43, 11, 63, 0.4)',
      background: 'linear-gradient(45deg, #8a2be2, #2b0b3f)',
      ease: "power2.inOut"
    });

  // Enhanced hover animation
  toggleButton.addEventListener('mouseenter', () => {
    attentionAnimation.pause();
    gsap.to(toggleButton, {
      duration: 0.4,
      scale: 7.7,
      rotation: 11,
      boxShadow: '0 0 42px rgba(138, 43, 226, 0.8)',
      background: 'linear-gradient(45deg, #2b0b3f, #8a2be2)',
      ease: "elastic.out(1, 0.5)"
    });
  });

  toggleButton.addEventListener('mouseleave', () => {
    gsap.to(toggleButton, {
      duration: 0.4,
      scale: 1,
      rotation: 0,
      boxShadow: '0 0 20px rgba(43, 11, 63, 0.4)',
      background: 'linear-gradient(45deg, #8a2be2, #2b0b3f)',
      ease: "power2.out",
      onComplete: () => {
        attentionAnimation.play();
      }
    });
  });

  // Click animation
  toggleButton.addEventListener('click', () => {
    gsap.to(toggleButton, {
      duration: 0.2,
      scale: 0.9,
      rotation: -15,
      boxShadow: '0 0 10px rgba(43, 11, 63, 0.2)',
      ease: "power2.in",
      onComplete: () => {
        gsap.to(toggleButton, {
          duration: 0.4,
          scale: 1,
          rotation: 0,
          boxShadow: '0 0 20px rgba(43, 11, 63, 0.4)',
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  });

  return toggleButton;
}

// Function to create and style a form div
function createFormDiv() {
  const formDiv = document.createElement('div');
  formDiv.id = 'xformdiv';
  formDiv.style = '';
  formDiv.style.position = 'fixed';
  formDiv.style.bottom = '60px';
  formDiv.style.right = '20px';
  formDiv.style.display = 'none';

  document.body.appendChild(formDiv);
  return formDiv;
}

// Sample JSON variable with themes
const themes = [
  { slug: '80s', name: '80s Style 🎸', url: 'styles_80s.css', description: 'A vibrant 80s theme with neon colors and retro vibes 🎵💿🎨' },
  { slug: 'reading', name: 'Reading 📚', url: 'styles_reading.css', description: 'A comfortable reading theme with optimized typography and eye-friendly colors 👓📖✨' },
  { slug: 'cyberpunk', name: 'Cyberpunk 🌆', url: 'styles_cyberpunk.css', description: 'A neon-drenched cyberpunk theme with retro-futuristic aesthetics ⚡️💻🌃' },
  { slug: 'nature', name: 'Nature 🌿', url: 'styles_nature.css', description: 'A calming nature-inspired theme with organic colors and textures 🍃🌱🌳' },
  { slug: 'minimalist', name: 'Minimalist ⚪️', url: 'styles_minimalist.css', description: 'A clean, modern theme with plenty of white space and subtle interactions ✨🎯💭' },
  { slug: 'terminal', name: 'Retro Terminal 💻', url: 'styles_terminal.css', description: 'A classic terminal theme with green-on-black and command-line aesthetics ⌨️🖥️📟' },
  { slug: 'space', name: 'Space 🚀', url: 'styles_space.css', description: 'A cosmic theme with star fields, nebula effects, and floating elements 🌌✨🌠' },
  { slug: 'vintage', name: 'Vintage 📜', url: 'styles_vintage.css', description: 'A nostalgic vintage theme with sepia tones and paper textures 🕰️📚🎞️' },
  { slug: 'gaming', name: 'Gaming 🎮', url: 'styles_gaming.css', description: 'A retro gaming theme with pixel art elements and arcade-style UI 🕹️👾🎯' },
  { slug: '90s', name: '90s Web 🌐', url: 'styles_90s.css', description: 'A nostalgic 90s web theme with Geocities-inspired elements and classic internet aesthetics 💫🌟💻' }
];

// Function to create theme links
function createThemeLinks(form) {
  const scrollableDiv = document.createElement('div');
  scrollableDiv.style.maxHeight = '300px';
  scrollableDiv.style.overflowY = 'auto';
  scrollableDiv.style.marginBottom = '15px';
  scrollableDiv.style.padding = '10px';
  scrollableDiv.style.border = '1px solid #ddd';
  scrollableDiv.style.borderRadius = '5px';
  scrollableDiv.style.backgroundColor = '#f9f9f9';

  const themeList = document.createElement('ul');
  themeList.style.listStyleType = 'none';
  themeList.style.padding = '0';
  themeList.style.margin = '0';

  themes.forEach(theme => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = `${theme.name}: ${theme.description}`;
    link.href = '#';
    link.style.display = 'block';
    link.style.marginBottom = '10px';
    link.style.padding = '8px';
    link.style.color = '#007bff';
    link.style.textDecoration = 'none';
    link.style.borderRadius = '4px';
    link.style.transition = 'background-color 0.2s';

    // Add hover effect
    link.addEventListener('mouseover', function () {
      link.style.backgroundColor = '#f0f0f0';
    });
    link.addEventListener('mouseout', function () {
      link.style.backgroundColor = 'transparent';
    });

    link.addEventListener('click', function (event) {
      event.preventDefault();
      loadThemeCss(theme);
    });
    listItem.appendChild(link);
    themeList.appendChild(listItem);
  });

  scrollableDiv.appendChild(themeList);
  form.appendChild(scrollableDiv);
}

// Function to load theme CSS into the textarea (does NOT apply it)
function loadThemeCss(theme) {
  if (theme) {
    fetch(chrome.runtime.getURL(theme.url))
      .then(response => response.text())
      .then(cssContent => {
        const textarea = document.getElementById('xtextarea');
        textarea.value = cssContent;
      })
      .catch(error => console.error('Error loading theme:', error));
  }
}

// Modify handleCustomStyleSubmission to apply styles from the textarea
function handleCustomStyleSubmission(form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeExistingCustomStyles(); // Clear existing styles
    const customStyles = document.getElementById('xtextarea').value;
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    styleElement.setAttribute('data-foo', 'bar');
    styleElement.setAttribute('data-custom', 'true');
    document.head.appendChild(styleElement);
  });
}

// Function to remove existing custom styles
function removeExistingCustomStyles() {
  const existingStyleElements = document.querySelectorAll('style[data-foo="bar"]');
  existingStyleElements.forEach(element => element.remove());
}

// Function to create and attach cool meta div to articles
function addCoolMeta(article) {
  const metaDiv = document.createElement('div');
  metaDiv.className = 'xcoolmeta';

  // Style the meta div
  metaDiv.style.position = 'absolute';
  metaDiv.style.right = '-220px'; // Offset to the right
  metaDiv.style.top = '20px';
  metaDiv.style.width = '200px';
  metaDiv.style.padding = '15px';
  metaDiv.style.backgroundColor = 'rgba(43, 11, 63, 0.95)';
  metaDiv.style.borderRadius = '10px';
  metaDiv.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.3)';
  metaDiv.style.backdropFilter = 'blur(5px)';
  metaDiv.style.border = '1px solid rgba(138, 43, 226, 0.3)';
  metaDiv.style.transition = 'all 0.3s ease';
  metaDiv.style.opacity = '0';
  metaDiv.style.transform = 'translateX(20px)';

  // Create form
  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '10px';

  // Create textarea
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Add your notes here...';
  textarea.style.width = '100%';
  textarea.style.height = '100px';
  textarea.style.padding = '10px';
  textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  textarea.style.border = '1px solid rgba(138, 43, 226, 0.3)';
  textarea.style.borderRadius = '5px';
  textarea.style.color = '#ffffff';
  textarea.style.resize = 'none';
  textarea.style.fontFamily = 'inherit';
  textarea.style.fontSize = '14px';

  // Create save button
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Notes 💾';
  saveButton.style.padding = '8px 15px';
  saveButton.style.backgroundColor = 'rgba(138, 43, 226, 0.8)';
  saveButton.style.color = '#ffffff';
  saveButton.style.border = 'none';
  saveButton.style.borderRadius = '5px';
  saveButton.style.cursor = 'pointer';
  saveButton.style.transition = 'all 0.3s ease';
  saveButton.style.fontWeight = 'bold';
  saveButton.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';

  // Add hover effect to save button
  saveButton.addEventListener('mouseenter', () => {
    saveButton.style.backgroundColor = 'rgba(138, 43, 226, 1)';
    saveButton.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.5)';
  });

  saveButton.addEventListener('mouseleave', () => {
    saveButton.style.backgroundColor = 'rgba(138, 43, 226, 0.8)';
    saveButton.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
  });

  // Add form elements
  form.appendChild(textarea);
  form.appendChild(saveButton);
  metaDiv.appendChild(form);

  // Add hover effect to meta div
  article.addEventListener('mouseenter', () => {
    gsap.to(metaDiv, {
      duration: 0.3,
      opacity: 1,
      x: 0,
      ease: "power2.out"
    });
  });

  article.addEventListener('mouseleave', () => {
    gsap.to(metaDiv, {
      duration: 0.3,
      opacity: 0,
      x: 20,
      ease: "power2.in"
    });
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const notes = textarea.value;
    // Save notes to storage using article's unique identifier
    const articleId = article.id || article.dataset.id || Math.random().toString(36).substr(2, 9);
    chrome.storage.local.set({ [articleId]: notes }, () => {
      // Show save confirmation
      saveButton.textContent = 'Saved! ✨';
      setTimeout(() => {
        saveButton.textContent = 'Save Notes 💾';
      }, 2000);
    });
  });

  // Load saved notes
  const articleId = article.id || article.dataset.id || Math.random().toString(36).substr(2, 9);
  chrome.storage.local.get([articleId], (result) => {
    if (result[articleId]) {
      textarea.value = result[articleId];
    }
  });

  // Make article position relative if it's not already
  if (getComputedStyle(article).position === 'static') {
    article.style.position = 'relative';
  }

  // Append meta div to article
  article.appendChild(metaDiv);
}

// Function to initialize cool meta for all articles
function initializeCoolMeta() {
  // Select all articles (adjust selector based on your needs)
  const articles = document.querySelectorAll('article, .article, [role="article"]');
  articles.forEach(article => {
    addCoolMeta(article);
  });

  // Create observer to handle dynamically added articles
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          if (node.matches('article, .article, [role="article"]')) {
            addCoolMeta(node);
          }
          // Check for articles within added nodes
          const articles = node.querySelectorAll('article, .article, [role="article"]');
          articles.forEach(article => addCoolMeta(article));
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Initialize the UI components
function initializeUI() {
  // createStyledDiv();
  const toggleButton = createToggleButton();
  const formDiv = createFormDiv();

  // Toggle form visibility
  toggleButton.addEventListener('click', function () {
    formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
  });

  // Create and append the form
  const form = document.createElement('form');
  form.id = 'xform';

  // Add theme links
  createThemeLinks(form);

  // Add h2 element
  const heading = document.createElement('h2');
  heading.textContent = 'CoolGeePeeTee';
  formDiv.appendChild(heading);

  // Add textarea
  const textarea = document.createElement('textarea');
  textarea.id = 'xtextarea';
  form.appendChild(textarea);

  // Add apply button
  const applyButton = document.createElement('button');
  applyButton.textContent = 'APPLY!!';
  applyButton.id = 'xapplybutton';
  applyButton.style.width = '100%';
  applyButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  applyButton.style.marginTop = '10px';
  form.appendChild(applyButton);

  // Move 'Get More Themes' link below the apply button
  const moreThemesLink = document.createElement('a');
  moreThemesLink.textContent = 'Get More Themes';
  moreThemesLink.href = '//nofate.net/coolgeepeetee'; // Add the actual link here
  const moreThemesDiv = document.createElement('div');
  moreThemesDiv.appendChild(moreThemesLink);

  // Style the link
  moreThemesLink.style.display = 'block';
  moreThemesLink.style.marginTop = '10px';
  moreThemesLink.style.textAlign = 'center';
  moreThemesLink.style.color = '#007bff';
  moreThemesLink.style.textDecoration = 'none';
  moreThemesLink.style.fontWeight = 'bold';
  moreThemesLink.style.transition = 'color 0.3s';

  // Add hover effect
  moreThemesLink.addEventListener('mouseover', function () {
    moreThemesLink.style.color = '#0056b3';
  });
  moreThemesLink.addEventListener('mouseout', function () {
    moreThemesLink.style.color = '#007bff';
  });

  form.appendChild(moreThemesDiv);

  formDiv.appendChild(form);
  handleCustomStyleSubmission(form);
  initializeCoolMeta();
}

// Run the initialization
initializeUI();