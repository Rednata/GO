const burgerOpenMenu = document.querySelector('.burger__img');
const overlayBurger = document.querySelector('.overlay-burger');
const duration = 300;

const movie = (progress) => {
  const left = (progress) * 100;
  overlayBurger.style.transform = `translateX(${left}%)`;
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
  const gameOverImg = document.querySelector('.game-over__img');
  gameOverImg.style.display = 'none';
};

const createBtnCallHeader = () => {
  const btnCall = document.createElement('button');
  btnCall.textContent = 'Заказать звонок';
  btnCall.classList.add('header__btn');
  btnCall.style.display = 'block';
  document.querySelector('.nav__list_burger').append(btnCall);
};

const openBurger = () => {
  overlayBurger.style.display = 'block';
  burgerOpenMenu.src = './assets/header/close.svg';
  burgerOpenMenu.classList.toggle('open');
  const heightHeader = getHeightHeader();
  overlayBurger.style.top = `${heightHeader}px`;

  if (document.body.offsetWidth < 650) {
    hiddenImg();
  }
  if (document.body.offsetWidth < 480) {
    createBtnCallHeader();
  }
};

const closeBurger = () => {
  overlayBurger.style.display = 'none';
  overlayBurger.style.left = '-100%';
  burgerOpenMenu.src = './assets/header/menu.svg';
  burgerOpenMenu.classList.toggle('open');
  const gameOverImg = document.querySelector('.game-over__img');
  gameOverImg.style.display = 'block';

  if (document.body.offsetWidth <= 480) {
    const btnCall = overlayBurger.querySelector('.header__btn');
    btnCall.remove();
  }
};

const deleteOverlay = () => {
  const navListBurger = document.querySelector('.nav__list_burger');
  navListBurger.addEventListener('click', ({ target }) => {
    if (target.closest('.nav__link')) {
      closeBurger();
    }
  });
};

const controlBurger = () => {
  burgerOpenMenu.addEventListener('click', () => {
    if (burgerOpenMenu.classList.contains('open')) {
      closeBurger();
    } else {
      openBurger();
      animate(duration, movie);
    }
  });
  overlayBurger.addEventListener('click', ({ target }) => {
    if (target.classList.contains('overlay-burger')) {
      closeBurger();
    }
  });
  deleteOverlay();
};

export {controlBurger};
