document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
      const answer = box.nextElementSibling; // Find the answer div next to clicked box
      if (answer.style.display === 'block') {
        answer.style.display = 'none'; // Hide answer if already visible
      } else {
        answer.style.display = 'block'; // Show answer if hidden
      }
    });
  });
  