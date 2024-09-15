$(document).ready(function () {
  //FADE//
  $("main").fadeIn(1000);
  // CENTER BUTTONS SCROLL //
  $("#about").on({
    click: function () {
      document.querySelector(".introduction").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
  });
  $("#services").on({
    click: function () {
      document.querySelector(".services-section").scrollIntoView({
        behavior: "smooth",
      });
    },
  });
  $("#contact").on({
    click: function () {
      document.querySelector(".contact-section").scrollIntoView({
        behavior: "smooth",
      });
    },
  });
  // PHOTO HOVER //
  $("#gfx1").on({
    mouseenter: function () {
      $("#gfx-main").attr("src", "images/main-image.png");
    },
  });
  $("#gfx2").on({
    mouseenter: function () {
      $("#gfx-main").attr("src", "images/main-image-2.png");
    },
  });
  $("#gfx3").on({
    mouseenter: function () {
      $("#gfx-main").attr("src", "images/main-image-3.png");
    },
  });

  // FURINA //
  $("#furina").on({
    mouseenter: function () {
      $(this).attr("src", "images/furina2.png");
    },
    mouseleave: function () {
      $(this).attr("src", "images/furina.png");
    },
  });
});
