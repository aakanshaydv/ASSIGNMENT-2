// for taskk 2
const fetchButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('outputDiv');

fetchButton.addEventListener('click', async () => {
  outputDiv.textContent = 'Loading...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const titles = data.map(post => post.title);
    outputDiv.innerHTML = `<h2>Post Titles:</h2><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
  } catch (error) {
    outputDiv.textContent = `Error: ${error.message}`;
  }
});


// for task 3 
// const fetchWithTimeout = async (url, timeout = 5000) => {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), timeout);
  
//     const response = await fetch(url, { signal: controller.signal });
//     clearTimeout(timeoutId);
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     return response;
//   };
  
//   fetchButton.addEventListener('click', async () => {
//     outputDiv.textContent = 'Loading...';
  
//     try {
//       const response = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       const titles = data.map(post => post.title);
//       outputDiv.innerHTML = `<h2>Post Titles:</h2><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
//     } catch (error) {
//       outputDiv.textContent = `Error: ${error.message}`;
//     }
//   });
  