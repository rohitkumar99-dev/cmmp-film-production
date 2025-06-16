$(window).on("load", function () {
  $("#preloader").fadeOut("slow", function () {
    $("body").removeClass("loading");
  });
});

// Scroll-based navbar class toggle (only if Offcanvas NOT visible)
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const offcanvasOpen = document.querySelector(".offcanvas.show");
  if (!offcanvasOpen && navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }

  document
    .getElementById("scrollUp")
    ?.classList.toggle("active", window.scrollY > 300);
});
window.dispatchEvent(new Event("scroll")); // initialize state

// Hide offcanvas on nav-link click
$(document).on("click", ".offcanvas .nav-link", function () {
  bootstrap.Offcanvas.getInstance(this.closest(".offcanvas"))?.hide();
});

// Scroll to top
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("scrollUp")?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
