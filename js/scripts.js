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
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
});

