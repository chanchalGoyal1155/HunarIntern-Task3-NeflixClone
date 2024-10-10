document.addEventListener('DOMContentLoaded', () => {
    // Button for navigating to the footer section of index.html
    const footerButton = document.querySelector('.back-to-footer'); 
  
    if (footerButton) {
      footerButton.onclick = () => {
        window.location.href = 'index.html#footer'; 
      };
    }
  });
  

  