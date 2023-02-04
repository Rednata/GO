const burgerMenu = document.querySelector('.burger-icon');
const overlayBurger = document.querySelector('.overlay-burger');
const header = document.querySelector('.header__box');

const duration = 500;

const movie = (progress) => {
  const left = ((progress - 1) * 100) ;
  overlayBurger.style.transform = `translateX(${left}%)`;
  header.style.transform = `translateX(${left}%)`;
  console.log(progress);
};

const animate = (duration, movie) => {
  let startTime = NaN;
  requestAnimationFrame(function step(timestamp) {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / duration;
    movie(progress);
    if (progress < 0.99) {
      requestAnimationFrame(step);
    }
  });
};

const getHeightHeader = () => {
  return document.querySelector('.header__box').clientHeight + 40;
};

const hiddenImg = () => {  
  if (gameOverImg) {
    gameOverImg.style.display = 'none';
  }
};

// const createBtnCallHeader = () => {
//   const btnCall = document.createElement('button');
//   btnCall.textContent = 'Заказать звонок';
//   btnCall.classList.add('header__btn');  
//   btnCall.style.display = 'block';
//   document.querySelector('.nav__list_burger').append(btnCall);
// };

const openBurger = () => {


  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');

  const headerBtnCall = document.querySelector('.header__btn');
  console.log(overlayBurger);

  header.classList.add('header__box_burger');
  nav.classList.add('nav_burger');
  navList.classList.add('nav__list_burger');
  overlayBurger.classList.add('overlay-burger_active');
  headerBtnCall.classList.add('header__btn_burger')




  // overlayBurger.style.display = 'block';
  // burgerOpenMenu.src = './assets/header/close.svg';
  // burgerOpenMenu.classList.toggle('open');
  // const heightHeader = getHeightHeader();
  // overlayBurger.style.top = `${heightHeader}px`;


  // const mediaQ = window.matchMedia('(min-width: 650px)');
  // mediaQ.addEventListener('change', (e) => {
  //   console.log('mediaQ: ', mediaQ);
    
  // if (e.matches) {
  //   hiddenImg();
  // }
  // })

}

// if (document.body.offsetWidth < 650) {
//     hiddenImg();
//   }
//   if (document.body.offsetWidth < 480) {
//     console.log(document.querySelector('.burger__btn'));
//   }
// };

// const closeBurger = () => {
//   overlayBurger.style.display = 'none';
//   overlayBurger.style.left = '-100%';
//   burgerOpenMenu.src = './assets/header/menu.svg';
//   burgerOpenMenu.classList.toggle('open');
//   if (gameOverImg) {
//     gameOverImg.style.display = 'block';
//   }

//   if (document.body.offsetWidth <= 480) {
//     // const btnCall = overlayBurger.querySelector('.burger__btn');
//     // btnCall.remove();
//     console.log('+++++++');
//   }
// };

// const deleteOverlay = () => {
//   const navListBurger = document.querySelector('.nav__list_burger');
//   navListBurger.addEventListener('click', ({ target }) => {
//     if (target.closest('.nav__link')) {
//       closeBurger();
//     }
//   });
// };

const controlBurger = () => {
  burgerMenu.addEventListener('click', () => {


    openBurger()
    animate(duration, movie);


    // if (burgerOpenMenu.classList.contains('open')) {
    //   closeBurger();
    // } else {
    //   openBurger();
    //   animate(duration, movie);



    // }
  });
  overlayBurger.addEventListener('click', ({ target }) => {
    if (target.classList.contains('overlay-burger')) {
      closeBurger();
    }
  });
  deleteOverlay();
};

export {controlBurger};
