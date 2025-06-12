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
  toggleButton.textContent = 'Change Style';
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

// Function to handle form submission
function handleFormSubmission(form) {
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
  handleFormSubmission(form);
}

// Run the initialization
initializeUI();