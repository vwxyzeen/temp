// popup explore
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
      // Get the image source and other details
      const imageSrc = this.querySelector('img').src;
      const title = this.querySelector('.description .down .pn h4').textContent;
      const rate = this.querySelector('.description .rating span').textContent;
      const location = this.querySelector('.description .price-item .loc p').textContent;
      const price = this.querySelector('.description .price-item .price-x p').textContent;
  
      // Get the text from the hidden paragraph
      const additionalText = this.querySelector('.description .price-item .text p').textContent;
  
      // Set the values in the popup
      document.getElementById('popup-image').src = imageSrc;
      document.getElementById('popup-title').textContent = title;
      document.getElementById('popup-rate').textContent = rate;
      document.getElementById('popup-mini-text').textContent = location;
      document.getElementById('popup-price').textContent = price;
      document.getElementById('popup-text').textContent = additionalText; // Set additional text
  
      // Show the popup
      document.getElementById('popup').classList.remove('hidden');
    });
  });
  
  // Close the popup
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
  });
  
  // Close the popup when clicking outside of it
  document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('hidden');
    }
  });
