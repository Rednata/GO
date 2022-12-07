const faqButtons = document.querySelectorAll('.faq-item__header');
const btnSvgs = document.querySelectorAll('.faq-item__img');
const faqContentItems = document.querySelectorAll('.faq-item__content');

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

export {faqAccordeon};
