// Featured Image Carousel
document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 768;
  const carousel = document.getElementById("featured-image-carousel");
  const slides = carousel.querySelectorAll(".splide__slide");

  slides.forEach((slide) => {
    const img = slide.querySelector(
      isMobile ? ".featured-portrait-image" : ".featured-landscape-image"
    );

    // If already broken
    if (!img.complete || img.naturalWidth === 0) {
      slide.remove();
      return;
    }

    // If error happens after load
    img.addEventListener("error", () => {
      slide.remove();
    });
  });

  setTimeout(() => {
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
            arrows: false, // Still disable arrows for small screens
            pagination: validSlides.length > 1,
          },
        },
      };

      new Splide("#featured-image-carousel", splideOptions).mount();
    } else {
      console.warn("No valid slides available for Splide.");
    }
  }, 100);
});


// -----------------------------

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    gap: 10,
    rewind: true,
    pagination: false,
  }).mount();
});
