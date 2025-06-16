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
toggleButton.textContent = 'Switch Theme!';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
document.body.appendChild(toggleButton);
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
  { slug: '80s', name: '80s Style', url: 'styles_80s.css', description: 'A vibrant 80s theme.' },
  { slug: 'Reading', name: 'Reading', url: 'styles_reading.css', description: 'For reading.' },
  { slug: 'cyberpunk', name: 'Cyberpunk', url: 'styles_cyberpunk.css', description: 'A neon-drenched cyberpunk theme with retro-futuristic aesthetics.' },
  { slug: 'nature', name: 'Nature', url: 'styles_nature.css', description: 'A calming nature-inspired theme with organic colors and textures.' },
  { slug: 'minimalist', name: 'Minimalist', url: 'styles_minimalist.css', description: 'A clean, modern theme with plenty of white space and subtle interactions.' },
  { slug: 'terminal', name: 'Retro Terminal', url: 'styles_terminal.css', description: 'A classic terminal theme with green-on-black and command-line aesthetics.' },
  { slug: 'space', name: 'Space', url: 'styles_space.css', description: 'A cosmic theme with star fields, nebula effects, and floating elements.' },
  { slug: 'vintage', name: 'Vintage', url: 'styles_vintage.css', description: 'A nostalgic vintage theme with sepia tones and paper textures.' },
  {
    slug: 'gaming',
    name: 'Gaming',
    url: 'styles_gaming.css',
    description: 'A retro gaming theme with pixel art elements and arcade-style UI.'
  },
  { slug: '90s', name: '90s Web', url: 'styles_90s.css', description: 'A nostalgic 90s web theme with Geocities-inspired elements and classic internet aesthetics.' }
];

// Function to create theme links
function createThemeLinks(form) {
  const themeList = document.createElement('ul');
  themeList.style.listStyleType = 'none';
  themeList.style.padding = '0';

  themes.forEach(theme => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = `${theme.name}: ${theme.description}`;
    link.href = '#';
    link.style.display = 'block';
    link.style.marginBottom = '5px';
    link.style.color = '#007bff';
    link.style.textDecoration = 'none';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      loadThemeCss(theme);
    });
    listItem.appendChild(link);
    themeList.appendChild(listItem);
  });

  form.appendChild(themeList);
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
  moreThemesLink.href = '//coolgeepeetee.com'; // Add the actual link here
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
  moreThemesLink.addEventListener('mouseover', function() {
    moreThemesLink.style.color = '#0056b3';
  });
  moreThemesLink.addEventListener('mouseout', function() {
    moreThemesLink.style.color = '#007bff';
  });

  form.appendChild(moreThemesDiv);

  formDiv.appendChild(form);
  handleCustomStyleSubmission(form);
}

// Run the initialization
initializeUI();