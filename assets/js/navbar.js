window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Trigger on page load
window.dispatchEvent(new Event("scroll"));

$(document).on("click", ".offcanvas .nav-link", function () {
  var offcanvasEl = $(this).closest(".offcanvas");
  var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl[0]);
  if (offcanvasInstance) {
    offcanvasInstance.hide();
  }
});
