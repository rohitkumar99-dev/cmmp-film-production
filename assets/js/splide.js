document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("featured-image-carousel");
  let slides = carousel.querySelectorAll(".splide__slide");
  const isMobile = window.innerWidth < 768;

  let imagesToLoad = 0;
  let imagesProcessed = 0;

  function checkDone() {
    if (imagesProcessed === imagesToLoad) {
      initSplide();
    }
  }

  slides.forEach((slide) => {
    const img = slide.querySelector(
      isMobile ? ".featured-portrait-image" : ".featured-landscape-image"
    );

    if (!img) return;

    imagesToLoad++;

    if (img.complete) {
      // Already loaded OR failed
      if (img.naturalWidth === 0) {
        slide.remove(); // broken image हटाओ
      }
      imagesProcessed++;
      checkDone();
    } else {
      img.onload = () => {
        imagesProcessed++;
        checkDone();
      };

      img.onerror = () => {
        slide.remove(); // broken image हटाओ
        imagesProcessed++;
        checkDone();
      };
    }
  });

  // fallback (agar koi image hi nahi ho)
  if (imagesToLoad === 0) initSplide();

  function initSplide() {
    const validSlides = carousel.querySelectorAll(".splide__slide");

    if (validSlides.length === 0) {
      console.warn("No valid slides available.");
      return;
    }

    new Splide("#featured-image-carousel", {
      type: "fade",
      rewind: true,
      autoplay: true,
      interval: 5000,
      arrows: validSlides.length > 1,
      pagination: validSlides.length > 1,
      breakpoints: {
        768: {
          arrows: false,
          pagination: validSlides.length > 1,
        },
      },
    }).mount();
  }
});