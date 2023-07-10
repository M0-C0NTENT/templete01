// Open the fullscreen modal when an image is clicked or touched
var images = document.getElementsByClassName('image-list-item');
var modal = document.getElementById('fullscreen-modal');
var modalContent = document.getElementsByClassName('modal-content')[0];
var fullscreenImage = document.getElementsByClassName('fullscreen-image')[0];
var leftArrow = document.getElementsByClassName('left-arrow')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];
var closeModal = document.getElementsByClassName('close')[0];
var touchStartX = 0;
var touchEndX = 0;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    openFullscreen(this.src);
  });

  images[i].addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
  });

  images[i].addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleTouchSwipe(this, touchStartX, touchEndX);
  });
}

// Close the fullscreen modal
closeModal.addEventListener('click', closeFullscreen);

// Navigate to the previous image
leftArrow.addEventListener('click', navigateToPreviousImage);
leftArrow.addEventListener('touchstart', navigateToPreviousImage);

// Navigate to the next image
rightArrow.addEventListener('click', navigateToNextImage);
rightArrow.addEventListener('touchstart', navigateToNextImage);

// Open the fullscreen modal with the clicked image
function openFullscreen(imageSrc) {
  modal.style.display = 'block';
  fullscreenImage.src = imageSrc;
}

// Close the fullscreen modal
function closeFullscreen() {
  modal.style.display = 'none';
}

// Navigate to the previous image
function navigateToPreviousImage() {
  var currentImage = fullscreenImage.src;
  var currentIndex = Array.from(images).findIndex(function(image) {
    return image.src === currentImage;
  });
  
  var previousIndex = (currentIndex - 1 + images.length) % images.length;
  fullscreenImage.src = images[previousIndex].src;
}

// Navigate to the next image
function navigateToNextImage() {
  var currentImage = fullscreenImage.src;
  var currentIndex = Array.from(images).findIndex(function(image) {
    return image.src === currentImage;
  });
  
  var nextIndex = (currentIndex + 1) % images.length;
  fullscreenImage.src = images[nextIndex].src;
}

// Handle touch swipe to navigate images
function handleTouchSwipe(imageElement, startX, endX) {
  var touchThreshold = 50; // Minimum distance to trigger swipe
  
  if (endX - startX > touchThreshold) {
    navigateToPreviousImage();
  } else if (startX - endX > touchThreshold) {
    navigateToNextImage();
  }
}
