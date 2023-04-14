/*- reviews-slider -*/
var swiper = new Swiper(".reviews-slider", {
  autoHeight: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".reviews-slider .swiper-button-next",
    prevEl: ".reviews-slider .swiper-button-prev",
  },
});

/*- mov-slider -*/
var swiper = new Swiper(".mov-slider", {
  autoHeight: true,
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  spaceBetween: 60,
  navigation: {
    nextEl: ".mov-slider .swiper-button-next",
    prevEl: ".mov-slider .swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 60,
    },
    728: {
      spaceBetween: 20,
    },
    1240: {
      spaceBetween: 60,
    },
  },
});

