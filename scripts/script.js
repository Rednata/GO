'use strict';

const headerBtn = document.querySelector('.header__btn');
const overlayModal = document.querySelector('.overlay-modal');
const faqContentItems = document.querySelectorAll('.faq-item__content');
const faqButtons = document.querySelectorAll('.faq-item__header');
// const faqList = document.querySelector('.faq__list');
const btnSvgs = document.querySelectorAll('.faq-item__img');

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
  headerBtn.addEventListener('click', openModal);
  closeModal();
};

const getColorBtnSvg = (index) => {
  btnSvgs[index].classList.toggle('faq-item__img_white-active');
  btnSvgs[index].classList.toggle('faq-item__img_color');
};

const getWhiteBtnSvg = (index) => {
  btnSvgs[index].classList.toggle('faq-item__img_color-active');
  btnSvgs[index].classList.toggle('faq-item__img_white');
};

const faqAccordeon = () => {
  faqButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      faqContentItems[i].classList.toggle('faq-item__content_active');
      if (i % 2) {
        getColorBtnSvg(i);
      } else {
        getWhiteBtnSvg(i);
      }
    });
  });
};

const init = () => {
  controlModal();
  faqAccordeon();
};

init();
