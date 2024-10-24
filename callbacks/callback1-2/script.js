// Function to update the text after a delay
function updateTextWithDelay(callback) {
    // Simulate a delay of 5 seconds (5000 ms)
    setTimeout(function() {
      callback(); // Execute the callback function after the delay
    }, 5000);
  }
  
  // Callback function to update the text in the div
  function updateDivText() {
    const outputDiv = document.getElementById('outputDiv');
    outputDiv.textContent = 'Callback executed after 5 seconds';
  }
  
  // Add event listener to the button
  const delayButton = document.getElementById('delayButton');
  delayButton.addEventListener('click', function() {
    updateTextWithDelay(updateDivText); // Pass the callback function to be executed after delay
  });
  