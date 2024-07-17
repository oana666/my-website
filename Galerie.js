let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');

function showImage(index) {
  images.forEach((image) => (image.style.display = 'none'));
  images[index].style.display = 'block';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Afiseaza prima imagine la incarcarea paginii
showImage(currentImageIndex);