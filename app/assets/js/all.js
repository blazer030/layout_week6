$(document).ready(() => {
    console.log("i'm ready");
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1400: {
          slidesPerView: 3,
          spaceBetween: '120%',
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});