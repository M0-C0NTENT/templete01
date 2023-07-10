// Optional: If you want to prevent horizontal overscrolling as well, use the code below.
// This prevents scrolling on the x-axis.
document.body.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, { passive: false });
