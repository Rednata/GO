// import Swiper from 'swiper/swiper-bundle';

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
    480: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 8,

    },
    650: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // when window width is >= 1000px
    1000: {
      
      spaceBetween: 20,
    }
  }
});

