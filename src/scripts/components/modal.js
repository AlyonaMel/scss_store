// Первое модальное окно
const buttonProduct = document.querySelector('.product__preview');
const modalProduct = document.querySelector('.modal-product');

const closeModalProduct = event => {
  const target = event.target;

  if (target === modalProduct || target.closest('.modal-product__close')) {
    modalProduct.style.visibility = 'hidden';
    modalProduct.style.opacity = 0;
  }
}

const openModalProduct = () => {
  modalProduct.style.visibility = 'visible';
  modalProduct.style.opacity = 1;
}

buttonProduct.addEventListener('click', openModalProduct);
buttonProduct.addEventListener('click', openModalProduct);
modalProduct.addEventListener('click', closeModalProduct);

// Второе модальное окно
  const buttonBuy = document.querySelector('.product__btn-buy');
const modalBuy = document.querySelector('.modal');

const closeModal = event => {
  const target = event.target;

  if (target === modalBuy || target.closest('.modal__close')) {
    modalBuy.style.visibility = 'hidden';
    modalBuy.style.opacity = 0;
  }
}

const openModal = () => {
  modalBuy.style.visibility = 'visible';
  modalBuy.style.opacity = 1;
}

buttonBuy.addEventListener('click', openModal);
modalBuy.addEventListener('click', closeModal);
modalBuy.addEventListener('successBuy', closeModal);

const validation2 = new JustValidate('.modal__form', {
  colorWrong: '#bb370e'
});

validation2
  .addField('.modal-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Вы ввели больше, чем положено'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('.modal-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'number',
      errorMessage: 'Номер телефона содержит только цифры',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Номер телефона должен содержать 11 цифр'
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Номер телефона должен содержать 11 цифр'
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    const successEvent = new Event("successBuy");

    modalBuy.dispatchEvent(successEvent);
    openModalCall();

    let formData = new FormData(event.target);

    console.log(...formData);
  });


// Третье модальное окно
const modalCall = document.querySelector('.modal-call')
const modalBtn = document.querySelector('.modal__btn')

const closeModalCall = event => {
  const target = event.target;

  if (target === modalCall || target.closest('.modal-call__close')) {
    modalCall.style.visibility = 'hidden';
    modalCall.style.opacity = 0;
  }
}

const openModalCall = () => {
  modalCall.style.visibility = 'visible';
  modalCall.style.opacity = 1;
}

modalCall.addEventListener('click', closeModalCall);
