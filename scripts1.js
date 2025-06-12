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
toggleButton.textContent = 'Toggle Form';
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
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter something...';
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(input);
form.appendChild(submitButton);
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
  detailsDiv.style.marginTop = '10px';
  detailsDiv.style.padding = '10px';
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
fetch('https://myweb1712.wordpress.com/feed/')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
  .then(data => {
    const items = data.querySelectorAll('item');
    const xdiv = document.querySelector('#xdiv');
    xdiv.innerHTML = '<h3>RSS Feed Links:</h3>';
    items.forEach(item => {
      const title = item.querySelector('title').textContent;
      const link = item.querySelector('link').textContent;
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.textContent = title;
      linkElement.style.display = 'block';
      linkElement.style.marginBottom = '5px';
      xdiv.appendChild(linkElement);
    });
  })
  .catch(error => console.error('Error fetching RSS feed:', error));

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
xdiv.appendChild(styleDropdown);

// Function to change styles
styleDropdown.addEventListener('change', function() {
  const selectedStyle = styleDropdown.value;
  const linkElement = document.querySelector('link[rel="stylesheet"]');
  linkElement.href = selectedStyle;
});