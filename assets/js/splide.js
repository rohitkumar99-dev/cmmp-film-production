// Featured Image Carousel
new Splide("#featured-image-carousel", {
  type: "fade",
  rewind: true,
  autoplay: true,
  interval: 5000,
}).mount();

// Movie Carasousel
const getPerPage = () => {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 640) return 2;
  if (width <= 768) return 3;
  if (width <= 1024) return 4;
  return 5;
};

const initSplide = (selector) => {
  const carousel = document.querySelector(selector);
  if (!carousel) return;

  const totalSlides = carousel.querySelectorAll(".movieCarousel .splide__slide").length;
  const perPage = getPerPage();
  const enableFeatures = totalSlides > perPage;

  new Splide(selector, {
    type: "slide",
    rewind: true,
    pagination: false,
    perPage,
    gap: "1rem",
    arrows: false,
    pauseOnHover: true,
    interval: 5000,
    autoplay: enableFeatures,
    drag: enableFeatures,
    breakpoints: {
      1024: { perPage: 4 },
      768: { perPage: 3 },
      640: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount();
};

// Init individually
initSplide("#upcomingMovieCarousel");
initSplide("#releasedMovieCarousel");

// Optional: Re-initialize on window resize (optional performance hit if frequent)
window.addEventListener("resize", () => {
  // Destroy and reinit logic can be added here if needed
});
