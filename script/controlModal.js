import { closeBurger } from './controlBurger.js';

const headerBtn = document.querySelector('.header__btn');
const overlayModal = document.querySelector('.overlay-modal');

const openModal = () => {
  overlayModal.classList.remove('overlay-modal_invisible');
};

const closeModal = () => {
  overlayModal.addEventListener('click', ( {target} ) => {
    if (target === overlayModal ||
        target.closest('.modal-form__close')) {
      overlayModal.classList.add('overlay-modal_invisible');
    }
  });
};

const controlModal = () => {  
  headerBtn.addEventListener('click', () => {
    if (headerBtn.classList.contains('header__btn_burger')) {
      closeBurger();
    }
    openModal();
  })
  
  closeModal();
};

export {controlModal};
