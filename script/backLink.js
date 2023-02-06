export const makeBackLink = () => {
  const backLink = document.querySelector('.header__back-link') || '';
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      const url = document.referrer;
      backLink.href = url;            
    })    
  }
}