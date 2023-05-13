// get all the images in the menu
const images = document.querySelectorAll('.menu img');

// loop through each image and add a click event listener
images.forEach((image) => {
  image.addEventListener('click', () => {
    // open a new window with the image displayed in full-screen mode
    const fullScreenImage = window.open('', '', 'fullscreen=yes');
    fullScreenImage.document.write(`<img src="${image.src}" style="width: 100%; height: 100%; object-fit: contain;">`);
  });
});
