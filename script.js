import {controlModal} from './script/controlModal.js';
import { faqAccordeon } from './script/controlFaqAccordeon.js';
import { controlBurger } from './script/controlBurger.js';
// import { makeSlider } from './script/slider.js';
// import { makeBackLink } from './script/backLink.js';
// import { makeMask, makeValidate } from './script/validation.js';

const init = () => {
  controlModal();
  faqAccordeon();
  controlBurger();
  // makeSlider();
  // makeBackLink();
  // makeValidate();
  // makeMask();
};

init();
