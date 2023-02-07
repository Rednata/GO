const burgerMenu = document.querySelector('.header__burger-icon');
const overlayBurger = document.querySelector('.overlay-burger');
const header = document.querySelector('.header__box');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const headerBtnCall = document.querySelector('.header__btn');

const duration = 300;

const movie = (progress) => {
  const left = ((progress - 1) * 100) ;
  overlayBurger.style.transform = `translateX(${left}%)`;
  header.style.transform = `translateX(${left}%)`;  
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
}

const openBurger = () => {
  burgerMenu.classList.add('header__burger-icon_active');
  header.classList.add('header__box_burger');
  nav.classList.add('nav_burger');
  navList.classList.add('nav__list_burger');
  overlayBurger.classList.add('overlay-burger_active');
  headerBtnCall.classList.add('header__btn_burger');  
}

const closeBurger = () => {
  const tempDiv = document.querySelector('.tempDiv');
  if (tempDiv) tempDiv.remove();
  overlayBurger.className = ('overlay-burger');
  header.className = 'header__box';
  nav.classList.remove('nav_burger');
  navList.classList.remove('nav__list_burger');
  headerBtnCall.classList.remove('header__btn_burger');  
  burgerMenu.classList.remove('header__burger-icon_active');
}

const fixChangeHeight = () => {
  const tempHeight = header.offsetHeight;
  const main = document.querySelector('main');
  const tempDiv = document.createElement('div');
  tempDiv.className = 'tempDiv';
  tempDiv.style.height = `${tempHeight}px`;
  main.prepend(tempDiv);
}

const mediaQ = window.matchMedia('(min-width: 860px)');
mediaQ.addEventListener('change', (e) => {
  if (e.matches) {
    closeBurger();
}
})

const controlBurger = () => {
  burgerMenu.addEventListener('click', () => {
    
    if (burgerMenu.classList.contains('header__burger-icon_active')) {      
      closeBurger();        
    } else {            
      fixChangeHeight();

      openBurger()
      animate(duration, movie);

 

    }
  })
}

  overlayBurger.addEventListener('click', ({ target }) => {
    if (target.classList.contains('overlay-burger')) {
      closeBurger();
    }
  });


export {controlBurger, closeBurger};
