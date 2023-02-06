import JustValidate from 'just-validate'
import Inputmask from 'inputmask';

const makeMask = () =>  {
  const phoneMask = new Inputmask('+7-(999)-(999)-99-99')
  const inputPhone = document.querySelector('.inputPhone');  
  phoneMask.mask(inputPhone);
}

const makeValidate = () => {    
  const validateForm = new JustValidate(document.querySelector('.modal-form'));

  validateForm
    .addField('.inputName', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя должно содержать не менее 2х символов',
      },
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',      
      }
    ])
    .addField('.inputPhone', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },            
    ]);
}

export {makeValidate, makeMask}