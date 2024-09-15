$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 60) {
      $(".main-nav").addClass("sticky");
    } else {
      $(".main-nav").removeClass("sticky");
    }
  });
  $("#goTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
  $(window)
    .scroll(function () {
      if ($(this).scrollTop() > 300) {
        $("#goTop").addClass("active");
      } else {
        $("#goTop").removeClass("active");
        return false;
      }
    })
    .scroll();
});

// Servce Swiper

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
// ##################################################################Cosmatic Shop #################################################################

// ***********************************Latest Product*********************************************
