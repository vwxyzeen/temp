document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".left-item h4");
  const items = document.querySelectorAll(".item");
  const searchInput = document.querySelector(".right-item input");

  // Function to filter items by category
  function filterByCategory(categoryId) {
    items.forEach((item) => {
      if (categoryId === "Paling Populer") {
        // Show all items if "Paling Populer" is selected
        item.style.display = "block";
      } else {
        // Show items that match the category id
        if (item.id === categoryId) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }

  // Function to search by name
  function searchByName(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    items.forEach((item) => {
      const itemName = item.querySelector(".pn h4").textContent.toLowerCase();
      if (itemName.includes(lowerCaseTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Add click event to category filters
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Remove active class from all categories
      categories.forEach((cat) => cat.classList.remove("active"));
      // Add active class to the clicked category
      this.classList.add("active");
      // Filter items by category
      filterByCategory(this.id);
    });
  });

  // Add input event for search functionality
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value;
    searchByName(searchTerm);
  });

  // Initial load to show all items by default
  filterByCategory("Paling Populer");
});

// search
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search");
  const searchSpan = document.querySelector(".right-item span");
  const inputCategory = document.querySelector(".right-item span input");

  searchIcon.addEventListener("click", function () {
    // Toggle the class 'search-category' on the span element
    searchSpan.classList.toggle("search-category");
    inputCategory.classList.toggle("input-category");
  });
});


const navbar = document.querySelector('.navbar');

// Popup
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.item');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupRate = document.getElementById('popup-rate');
  const popupLocation = document.getElementById('popup-location');
  const popupPrice = document.getElementById('popup-price');
  const popupText = document.querySelector('.popup-des > p:nth-child(5)'); // p untuk text deskripsi

  // Function to open popup
  function openPopup(item) {
    // Get image source, title, location, price, rating, and text from clicked item
    const imgSrc = item.querySelector('img').src;
    const title = item.querySelector('.pn h4').textContent;
    const location = item.querySelector('.loc p').textContent;
    const price = item.querySelector('.price p').textContent;
    const rating = item.querySelector('.rating span').textContent;
    const text = item.querySelector('.text p').textContent; // mengambil deskripsi dari .text

    // Set the data into the popup
    popupImage.src = imgSrc;
    popupTitle.textContent = title;
    popupRate.textContent = rating; // Set rating next to title
    popupLocation.textContent = location;
    popupPrice.textContent = price;
    popupText.textContent = text; // Menambahkan teks deskripsi ke popup

    // Show popup
    popup.classList.remove('hidden');
  }

  // Event listener to each item
  items.forEach(item => {
    item.addEventListener('click', function() {
      openPopup(item);
    });
  });

  // Close popup when clicking the close button
  closeBtn.addEventListener('click', function() {
    popup.classList.add('hidden');
  });

  // Optional: Close popup when clicking outside the content area
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });

});
