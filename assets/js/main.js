// Preloader and anchor scroll after full load
$(window).on("load", function () {
  $("#preloader").fadeOut("slow", function () {
    $("body").removeClass("loading");
  });

  // Scroll to anchor with offset (adjusts for fixed navbar)
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        // Preferred offset-based scroll
        const yOffset = window.innerWidth < 768 ? -60 : -80;
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Use offset method if possible, fallback to scrollIntoView
        if ("scrollTo" in window) {
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }
});

// Navbar scroll effect + scroll-to-top toggle
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const offcanvasOpen = document.querySelector(".offcanvas.show");
  if (navbar && !offcanvasOpen) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
  document
    .getElementById("scrollUp")
    ?.classList.toggle("active", window.scrollY > 300);
});
window.dispatchEvent(new Event("scroll")); // Initial state on load

// Hide offcanvas when nav-link is clicked
$(document).on("click", ".offcanvas .nav-link", function () {
  bootstrap.Offcanvas.getInstance(this.closest(".offcanvas"))?.hide();
});

// Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("scrollUp")?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
