$(window).on("load", () => {
  $("#preloader").fadeOut("slow", () => $("body").removeClass("loading"));
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    ?.classList.toggle("scrolled", window.scrollY > 50);
  document
    .getElementById("scrollUp")
    ?.classList.toggle("active", window.scrollY > 300);
});
window.dispatchEvent(new Event("scroll"));

$(document).on("click", ".offcanvas .nav-link", function () {
  bootstrap.Offcanvas.getInstance(this.closest(".offcanvas"))?.hide();
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("scrollUp")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
