$(window)
  .on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  })
  .trigger("scroll");


  $(document).on("click", ".offcanvas .nav-link", function () {
    var offcanvasEl = $(this).closest(".offcanvas");
    var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl[0]);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  });
  
