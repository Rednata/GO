import Swiper from 'swiper/swiper-bundle';

new Swiper('.swiper', {
  loop: true,
  mousewheel: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
      direction: 'vertical',
    },
    // when window width is >= 480px
    600: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 8,

    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});


