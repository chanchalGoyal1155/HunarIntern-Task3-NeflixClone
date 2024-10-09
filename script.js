document.addEventListener('DOMContentLoaded', () => {
    // Button for navigating to the footer section of index.html
    const footerButton = document.querySelector('.back-to-footer'); // Select the button from HTML
  
    if (footerButton) {
      footerButton.onclick = () => {
        window.location.href = 'index.html#footer'; // Change this if your footer has a specific ID
      };
    }
  });
  

  