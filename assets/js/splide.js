// Featured Image Carousel

new Splide("#featured-image-carousel", {
  type: "fade",
  rewind: true,
  autoplay: true,
  interval: 5000,
}).mount();


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#thumbnail-carousel', {
		fixedWidth: 100,
		gap       : 10,
		rewind    : true,
		pagination: false,
  } ).mount();
} );