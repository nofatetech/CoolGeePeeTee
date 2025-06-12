console.log('Hello 1!');

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

alert('Hello, this is a dynamically inserted div!');

// Create a button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Change Style';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = 'var(--button-background-color)';
toggleButton.style.color = 'var(--button-text-color)';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '8px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

// Create a div with a form
const formDiv = document.createElement('div');
formDiv.style.position = 'fixed';
formDiv.style.bottom = '60px';
formDiv.style.right = '20px';
formDiv.style.padding = '20px';
formDiv.style.backgroundColor = 'var(--background-color)';
formDiv.style.border = '2px solid var(--article-border-color)';
formDiv.style.borderRadius = '8px';
formDiv.style.boxShadow = '0 4px 8px var(--article-shadow-color)';
formDiv.style.display = 'none';

// Add a simple form
const form = document.createElement('form');
form.id = 'xform';
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter something...';
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'APPLY!!';

// Add a textarea to the form
const textarea = document.createElement('textarea');
textarea.placeholder = 'Enter CSS styles here...';
textarea.style.width = '100%';
textarea.style.height = '100px';
textarea.style.backgroundColor = '#000';
textarea.style.color = '#0f0';
textarea.style.fontFamily = 'monospace';
textarea.style.border = '1px solid #0f0';
textarea.style.padding = '10px';
textarea.style.caretColor = '#0f0';
form.insertBefore(textarea, form.firstChild);

// Load saved styles from localStorage
const savedStyles = localStorage.getItem('customStyles');
if (savedStyles) {
  const styleElement = document.createElement('style');
  styleElement.textContent = savedStyles;
  document.head.appendChild(styleElement);
  textarea.value = savedStyles;
}

// Function to remove existing custom styles
function removeExistingCustomStyles() {
  const existingStyleElements = document.querySelectorAll('style[data-custom="true"]');
  existingStyleElements.forEach(element => element.remove());
}

// Apply styles and save to localStorage on form submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  removeExistingCustomStyles(); // Clear existing styles
  const customStyles = textarea.value;
  const styleElement = document.createElement('style');
  styleElement.textContent = customStyles;
  styleElement.setAttribute('data-custom', 'true');
  document.head.appendChild(styleElement);
  localStorage.setItem('customStyles', customStyles);
});

// Style the form
// form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
// form.style.padding = '20px';
// form.style.borderRadius = '8px';

// Style the submit button
submitButton.style.width = '100%';
submitButton.style.background = 'linear-gradient(145deg, #ff5722, #e64a19)';
submitButton.style.color = '#fff';
submitButton.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';

submitButton.addEventListener('mouseover', function() {
  submitButton.style.transform = 'translateY(-3px)';
});

submitButton.addEventListener('mouseout', function() {
  submitButton.style.transform = 'translateY(0)';
});

// form.appendChild(input);
form.appendChild(submitButton);

// Create the 'Get More Styles' button
const getMoreStylesButton = document.createElement('button');
getMoreStylesButton.textContent = 'Get More Styles';
getMoreStylesButton.style.width = '100%';
getMoreStylesButton.style.background = 'linear-gradient(145deg, #4caf50, #388e3c)';
getMoreStylesButton.style.color = '#fff';
getMoreStylesButton.style.border = 'none';
getMoreStylesButton.style.padding = '10px 20px';
getMoreStylesButton.style.borderRadius = '8px';
getMoreStylesButton.style.cursor = 'pointer';
getMoreStylesButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
getMoreStylesButton.style.marginBottom = '10px';

// Add click event to open a link
getMoreStylesButton.addEventListener('click', function() {
  window.open('https://myweb1712.wordpress.com/coolgeepeetee', '_blank');
});

// Insert the button above the 'Apply' button
form.insertBefore(getMoreStylesButton, submitButton);

formDiv.appendChild(form);
document.body.appendChild(formDiv);

// Toggle form visibility
toggleButton.addEventListener('click', function() {
  formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
});

// Select all <article> elements
const articles = document.querySelectorAll('article');

articles.forEach(article => {
  // Create a button for each article
  const articleButton = document.createElement('button');
  articleButton.textContent = 'Open Details';
  articleButton.style.marginTop = '10px';
  articleButton.style.padding = '5px 10px';
  articleButton.style.backgroundColor = 'var(--button-background-color)';
  articleButton.style.color = 'var(--button-text-color)';
  articleButton.style.border = 'none';
  articleButton.style.borderRadius = '8px';
  articleButton.style.cursor = 'pointer';
  article.appendChild(articleButton);

  // Create a div to show/hide
  const detailsDiv = document.createElement('div');
  detailsDiv.id = 'xdiv';
  detailsDiv.textContent = 'Additional details here...';
  detailsDiv.style.display = 'none';
  detailsDiv.style.width = '100%';
  detailsDiv.style.marginTop = '10px';
  detailsDiv.style.padding = '0px';
  detailsDiv.style.backgroundColor = 'var(--background-color)';
  detailsDiv.style.border = '1px solid var(--article-border-color)';
  detailsDiv.style.borderRadius = '8px';
  article.appendChild(detailsDiv);

  // Toggle div visibility on button click
  articleButton.addEventListener('click', function() {
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
  });
});

// Fetch RSS feed and display links in xdiv
// fetch('https://myweb1712.wordpress.com/feed/')
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
//   .then(data => {
//     const items = data.querySelectorAll('item');
//     const xdiv = document.querySelector('#xdiv');
//     xdiv.innerHTML = '<h3>RSS Feed Links:</h3>';
//     items.forEach(item => {
//       const title = item.querySelector('title').textContent;
//       const link = item.querySelector('link').textContent;
//       const linkElement = document.createElement('a');
//       linkElement.href = link;
//       linkElement.textContent = title;
//       linkElement.style.display = 'block';
//       linkElement.style.marginBottom = '5px';
//       xdiv.appendChild(linkElement);
//     });
//   })
//   .catch(error => console.error('Error fetching RSS feed:', error));

// Update the newDiv to have an id of 'xdiv'
newDiv.id = 'xdiv';

// Add a dropdown to select styles
const styleDropdown = document.createElement('select');
styleDropdown.innerHTML = `
  <option value="styles.css">Default Style</option>
  <option value="style1.css">Dark Theme</option>
  <option value="style2.css">Light Theme</option>
`;
styleDropdown.style.marginTop = '10px';
styleDropdown.style.padding = '5px';
// document.getElementById('xdiv').appendChild(styleDropdown);

// Function to change styles
styleDropdown.addEventListener('change', function() {
  const selectedStyle = styleDropdown.value;
  const linkElement = document.querySelector('link[rel="stylesheet"]');
  linkElement.href = selectedStyle;
});

// Example JSON data
const divData = [
  { slug: 'home', name: 'Home', link: '#', icon: '🏠' },
  { slug: 'about', name: 'About', link: '#', icon: 'ℹ️' },
  { slug: 'contact', name: 'Contact', link: '#', icon: '✉️' }
];

// Create a container for the divs
const divContainer = document.createElement('div');
divContainer.style.display = 'flex';
divContainer.style.justifyContent = 'space-between';
divContainer.style.marginBottom = '10px';

// Generate divs from JSON data
divData.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.style.width = '30%';
  itemDiv.style.padding = '10px';
  itemDiv.style.backgroundColor = '#222';
  itemDiv.style.color = '#fff';
  itemDiv.style.textAlign = 'center';
  itemDiv.style.borderRadius = '5px';

  const icon = document.createElement('span');
  icon.textContent = item.icon;
  const name = document.createElement('a');
  name.href = item.link;
  name.textContent = item.name;
  name.style.color = '#0f0';
  name.style.display = 'block';
  name.style.marginTop = '5px';

  itemDiv.appendChild(icon);
  itemDiv.appendChild(name);
  divContainer.appendChild(itemDiv);
});

// Insert the container above the form
xform.insertBefore(divContainer, form);