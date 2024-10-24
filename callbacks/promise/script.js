const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

fetchButton.addEventListener('click', () => {
  outputDiv.textContent = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Operation timed out.');
      }
      return response.json();
    })
    .then(data => {
      const titles = data.map(post => post.title); // Extracting titles from posts
      outputDiv.innerHTML = `<h2>Post Titles:</h2><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
     
    })
    .catch(error => {
      outputDiv.textContent = `Error: ${error.message}`;
    });
});



