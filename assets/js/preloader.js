$(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $("body").removeClass("loading");
    });
  });
  