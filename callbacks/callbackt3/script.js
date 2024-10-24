const button = document.getElementById('myButton');
const messageDiv = document.getElementById('message');

button.addEventListener('click', handleClick);

function handleClick() {
  // Fetch data from JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Update message with all post titles
      const titles = data.map(post => post.title);
      messageDiv.innerHTML = `<h2>Post Titles:</h2><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      messageDiv.textContent = 'Error fetching data';
    });
}


