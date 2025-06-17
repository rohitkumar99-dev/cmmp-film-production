document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("featured-image-carousel");
  const slides = carousel.querySelectorAll(".splide__slide");
  const isMobile = window.innerWidth < 768;

  let imagesToLoad = 0;
  let imagesLoaded = 0;

  slides.forEach((slide) => {
    const img = slide.querySelector(
      isMobile ? ".featured-portrait-image" : ".featured-landscape-image"
    );

    if (!img) return;

    imagesToLoad++;

    // Check if already loaded
    if (img.complete && img.naturalWidth !== 0) {
      imagesLoaded++;
    } else {
      img.addEventListener("load", () => {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) initSplide();
      });

      img.addEventListener("error", () => {
        slide.remove();
        imagesToLoad--; // exclude broken image
        if (imagesLoaded === imagesToLoad) initSplide();
      });
    }
  });

  // If all were already loaded
  if (imagesLoaded === imagesToLoad) initSplide();

  function initSplide() {
    const validSlides = carousel.querySelectorAll(".splide__slide");

    if (validSlides.length > 0) {
      const splideOptions = {
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
      };

      new Splide("#featured-image-carousel", splideOptions).mount();
    } else {
      console.warn("No valid slides for Splide.");
    }
  }
});
