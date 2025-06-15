// Featured Image Carousel
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#featured-image-carousel", {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 5000,
    arrows: true, // default for larger screens
    breakpoints: {
      768: { arrows: false }, // disable arrows below 768px
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    gap: 10,
    rewind: true,
    pagination: false,
  }).mount();
});
