// Predefined movie images
const movieImages = [
    'https://via.placeholder.com/500x300?text=Movie+1',
    'https://via.placeholder.com/500x300?text=Movie+2',
    'https://via.placeholder.com/500x300?text=Movie+3',
    'https://via.placeholder.com/500x300?text=Movie+4'
  ];
  
  let currentIndex = 0;
  let slideshowInterval;
  
  // Function to display image based on index
  function showImage(index) {
    const imageElement = document.getElementById('slideshow-image');
    imageElement.src = movieImages[index];
  }
  
  // Start the slideshow
  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % movieImages.length;
      showImage(currentIndex);
    }, 2000);
  }
  
  // Stop the slideshow
  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }
  
  // Next image
  document.getElementById('next').addEventListener('click', () => {
    stopSlideshow();
    currentIndex = (currentIndex + 1) % movieImages.length;
    showImage(currentIndex);
  });
  
  // Previous image
  document.getElementById('prev').addEventListener('click', () => {
    stopSlideshow();
    currentIndex = (currentIndex - 1 + movieImages.length) % movieImages.length;
    showImage(currentIndex);
  });
  
  // Play slideshow
  document.getElementById('play').addEventListener('click', startSlideshow);
  
  // Pause slideshow
  document.getElementById('pause').addEventListener('click', stopSlideshow);
  
  // Add a new image
  document.getElementById('add-image').addEventListener('click', () => {
    const imageUrl = document.getElementById('image-url').value;
    const imageIndex = parseInt(document.getElementById('image-index').value);
  
    // Validate the inputs
    if (imageUrl && imageIndex >= 0 && imageIndex <= movieImages.length) {
      movieImages.splice(imageIndex, 0, imageUrl); // Insert the new image at the specified index
      alert('Image added successfully!');
    } else {
      alert('Please provide a valid URL and index.');
    }
  });
  
  // Initialize slideshow with the first image
  showImage(currentIndex);
  